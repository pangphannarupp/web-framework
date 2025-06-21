import { duration } from "@mui/material";

var core = {};
var callbackCount = 0;
var callback = null;
var callbackList = [];
var eventList = [];

core.isMobile = false;
core.isAndroid = false;
core.isIOS = false;

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function (key, param) {
    param['isWebContent'] = true;
    const callback = param["callback"] || null;
    const scf = "callback-" + callbackCount++;
    param["scf"] = scf;
    callbackList.push({
        callbackFunction: callback,
        scf: scf,
        key: key,
    });

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        window.webkit.messageHandlers.JavascriptInterface.postMessage(JSON.stringify({
            'key': key,
            'param': param
        }));
    } else if (/android/i.test(navigator.userAgent)) {
        JavascriptInterface.execute(JSON.stringify({
            'key': key,
            'param': param
        }));
    }
    console.log(getFormattedDate() + ' : 🔵 [REQUEST WEB PLUGIN] key: ' + key + ', scf: ' + scf + ', param: ' + JSON.stringify(param));
}

core.openSetting = function () {
    execute('OPEN_SETTING', {});
}


core.native = {};
core.native.sample = function (param) {
    execute('SAMPLE_PLUGIN', {
        message: 'Hello Vue',
    });
}

/**
* Event Listener
* used to listen response from Native
*/
core.onEventListener = function (eventType, ...args) {
    for (var i = 0; i < eventList.length; i++) {
        if (eventList[i].eventType == eventType) {
            console.log(getFormattedDate() + ' : 🟢 [RESPONSE EVENT] key: ' + eventType + ', response: ' + args);
            eventList[i].function(...args);
        }
    }
}

/**
* Add Event Listener
* used to add event at client
*/
core.addEventListener = function (eventType, func) {
    console.log(getFormattedDate() + ' : 🔵 [REQUEST REGISTER EVENT] key: ' + eventType + ', function: ' + func.toString());
    eventList.push({
        eventType: eventType,
        function: func,
    });
}

core.removeEventListener = function (eventType, func) {
    console.log(getFormattedDate() + ' : ⚪ [REQUEST UNREGISTER EVENT] key: ' + eventType + ', function: ' + func.toString());
    eventList = eventList.filter(event =>
        !(event.eventType === eventType && event.function === func)
    );
}

/**
* Callback Listener
* used to listen response from Native
*/
core.callback = function (result, scf) {
    // if (callback != null) {
    //     callback(result);
    //     console.log(getFormattedDate() + ' : 🟢 [RESPONE WEB PLUGIN] result: ' + result);
    // }
    // console.log(getFormattedDate() + ' : 🟢 [callbackList] : ' + JSON.stringify(callbackList));
    for (var i = 0; i < callbackList.length; i++) {
        if (callbackList[i].scf === scf && callbackList[i].callbackFunction !== null) {
            console.log(getFormattedDate() + ' : 🟢 [RESPONE WEB PLUGIN] ' + callbackList[i].key + ', scf: ' + callbackList[i].scf + ', response : ' + result);
            callbackList[i].callbackFunction(result);
        }
    }

    callbackList = callbackList.filter(callback =>
        !(callback.scf === scf)
    );
}

core.admob = {};
core.admob.initialize = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ADMOB_PLUGIN', {
        'type': 'initialize',
        'callback': callback,
    });
}
core.admob.showInterstitial = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ADMOB_PLUGIN', {
        'type': 'showInterstitial',
        'adUnitId': param.adUnitId,
        'callback': callback,
    });
}
core.admob.showRewardedInterstitial = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ADMOB_PLUGIN', {
        'type': 'showRewardedInterstitial',
        'adUnitId': param.adUnitId,
        'callback': callback,
    });
}
core.admob.showRewarded = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ADMOB_PLUGIN', {
        'type': 'showRewarded',
        'adUnitId': param.adUnitId,
        'callback': callback,
    });
}

//APPLICATION_PLUGIN
core.application = {};
core.application.appInfo = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('APPLICATION_PLUGIN', {
        type: 'app_info',
        'callback': callback,
    });
}
core.application.exitApp = function (param) {
    execute('APPLICATION_PLUGIN', {
        type: 'exit',
        status: 0,
        'callback': null,
    });
}
core.application.openAppSetting = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('APPLICATION_PLUGIN', {
        type: 'app_setting',
        'callback': callback,
    });
}
core.application.hideSplash = function (param) {
    execute('HIDE_SPLASH_PLUGIN', {
        'callback': null,
    });
}
core.application.restartApp = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('APPLICATION_PLUGIN', {
        type: 'restart',
        'callback': callback,
    });
}
core.application.setStatusBarColor = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STATUS_BAR_PLUGIN', {
        background_color: param.background_color,
        text_color: param.text_color,
        'callback': callback,
    });
}

//BIOMETRIC_PLUGIN
core.biometric = {};
core.biometric.showBiometricPrompt = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('BIOMETRIC_PLUGIN', param);
}

//COPY_CLIPBOARD_PLUGIN
core.copyToClipboard = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('COPY_CLIPBOARD_PLUGIN', {
        'text': param.text
    });
}

core.device = {};
core.device.getGPS = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('GPS_PLUGIN', param);
}
core.device.setIsMobile = function (result) {
    core.isMobile = result;
}
core.device.setIsAndroid = function (result) {
    core.isAndroid = result;
}
core.device.setIsIOS = function (result) {
    core.isIOS = result;
}
core.device.showCamera = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('CAMERA_PLUGIN', param);
}
core.device.getTheme = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('THEME_MODE_PLUGIN', {
        type: 'get',
    });
}
core.device.setTheme = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('THEME_MODE_PLUGIN', {
        type: 'set',
        mode: param.mode,
    });
}
core.device.registerSmsRetriever = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SMS_RETRIEVER_PLUGIN', {
        type: 'register',
    });
}
core.device.unregisterSmsRetriever = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SMS_RETRIEVER_PLUGIN', {
        type: 'unregister',
    });
}
core.device.shareFile = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SHARE_PLUGIN', {
        type: 'file',
        file_path: param.filePath,
    });
}
core.device.shareImage = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SHARE_PLUGIN', {
        type: 'image',
        image_path: param.imagePath,
    });
}
core.device.shareLink = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SHARE_PLUGIN', {
        type: 'link',
        title: param.title,
        link: param.link,
    });
}
core.device.shareText = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SHARE_PLUGIN', {
        type: 'text',
        text: param.text,
    });
}
core.device.getOrientation = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ORIENTATION_PLUGIN', {
        type: 'get',
    });
}
core.device.setOrientation = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ORIENTATION_PLUGIN', {
        type: 'set',
        mode: param.mode,
    });
}
core.device.registerFaceUpDown = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FACE_UP_DOWN_PLUGIN', {
        type: 'register',
        'event_name': 'onFaceUpDown',
    });
}
core.device.unregisterFaceUpDown = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FACE_UP_DOWN_PLUGIN', {
        type: 'unregister',
    });
}

//DATE_PICKER_PLUGIN
core.dialog = {};
core.dialog.showAlert = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DIALOG_PLUGIN', {
        'type': 'alert',
        'text_title': param.title,
        'text_message': param.message,
        'text_ok': param.ok != undefined ? param.ok : "Confirm",
        'callback': callback,
    });
}
core.dialog.showConfirm = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DIALOG_PLUGIN', {
        'type': 'confirm',
        'text_title': param.title,
        'text_message': param.message,
        'text_confirm': param.confirmText != undefined ? param.confirmText : "Confirm",
        'text_cancel': param.cancelText != undefined ? param.cancelText : "Cancel",
        'callback': callback,
    });
}
core.dialog.showLoading = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DIALOG_PLUGIN', {
        'type': 'alert_loading',
        'message': param.message,
        'callback': callback,
    });
}
core.dialog.hideLoading = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DIALOG_PLUGIN', {
        'type': 'hide_loading',
        'callback': callback,
    });
}
core.dialog.showDatePicker = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DATE_PICKER_PLUGIN', param);
}
core.dialog.showTimePicker = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('TIME_PICKER_PLUGIN', param);
}
core.dialog.showToast = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('TOAST_MESSAGE_PLUGIN', {
        message: param.message,
        duration: 'short',
        'callback': callback,
    });
}

core.encdec = {};
core.encdec.generateSHA = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ENC_DEC_PLUGIN', {
        'type': 'generateSHA',
        'text': param.text,
        'method': param.method,
        'callback': callback,
    });
}
core.encdec.encrypt = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ENC_DEC_PLUGIN', {
        'type': 'encrypt',
        'text': param.text,
        'algorithm': param.algorithm,
        'mode': param.mode,
        'iv': param.iv,
        'secret_key': param.secretKey,
        'callback': callback,
    });
}
core.encdec.decrypt = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ENC_DEC_PLUGIN', {
        'type': 'decrypt',
        'text': param.text,
        'algorithm': param.algorithm,
        'mode': param.mode,
        'iv': param.iv,
        'secret_key': param.secretKey,
        'callback': callback,
    });
}

core.file = {};
core.file.openFileLibrary = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_BROWSER_PLUGIN', {
        'type': 'file',
        'types': param.types,
        'callback': callback,
    });
}
core.file.openImageGallery = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_BROWSER_PLUGIN', {
        'type': 'image',
        'types': ['image'],
        'callback': callback,
    });
}
core.file.openPdf = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('PDF_VIEWER_PLUGIN', {
        'filePath': param.filePath,
        'pathType': param.pathType,
        'canShare': param.canShare,
        'callback': callback,
    });
}
core.file.isExist = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'is_exist',
        'file_path': param.filePath,
        'path_type': param.pathType,
        'callback': callback,
    });
}
core.file.delete = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'delete_file',
        'file_path': param.filePath,
        'path_type': param.pathType,
        'callback': callback,
    });
}
core.file.copy = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'copy_file',
        'source_file_path': param.sourceFilePath,
        'source_path_type': param.sourcePathType,
        'destination_file_path': param.destinationFilePath,
        'destination_path_type': param.destinationFilePath,
        'callback': callback,
    });
}
core.file.move = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'move_file',
        'source_file_path': param.sourceFilePath,
        'source_path_type': param.sourcePathType,
        'destination_file_path': param.destinationFilePath,
        'destination_path_type': param.destinationFilePath,
        'callback': callback,
    });
}
core.file.info = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'check_file_info',
        'file_path': param.filePath,
        'path_type': param.pathType,
        'callback': callback,
    });
}
core.file.create = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'create_file',
        'file_path': param.filePath,
        'path_type': param.pathType,
        'callback': callback,
    });
}
core.file.createDirectory = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'create_directory',
        'path': param.path,
        'path_type': param.pathType,
        'callback': callback,
    });
}
core.file.deleteDirectory = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FILE_PLUGIN', {
        'type': 'delete_directory',
        'path': param.path,
        'path_type': param.pathType,
        'callback': callback,
    });
}

core.firebase = {};
core.firebase.checkRemoteConfig = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('FIREBASE_REMOTE_CONFIG_PLUGIN', {
        'params': param.params,
    });
}

core.ironSourceAds = {};
core.ironSourceAds.initialize = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IRON_SOURCE_ADS_PLUGIN', {
        'type': 'initialize',
        'appKey': param.appKey,
        'callback': callback,
    });
}
core.ironSourceAds.loadInterstitial = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IRON_SOURCE_ADS_PLUGIN', {
        'type': 'loadInterstitial',
        'callback': callback,
    });
}
core.ironSourceAds.showInterstitial = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IRON_SOURCE_ADS_PLUGIN', {
        'type': 'showInterstitial',
        'callback': callback,
    });
}
core.ironSourceAds.loadRewardedVideo = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IRON_SOURCE_ADS_PLUGIN', {
        'type': 'loadRewardedVideo',
        'callback': callback,
    });
}
core.ironSourceAds.showRewardedVideo = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IRON_SOURCE_ADS_PLUGIN', {
        'type': 'showRewardedVideo',
        'callback': callback,
    });
}

core.logger = {};
core.logger.record = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'record',
        'callback': callback,
    });
}
core.logger.stop = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'stop',
        'callback': callback,
    });
}
core.logger.clear = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'clear',
        'callback': callback,
    });
}
core.logger.show = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'show',
        'callback': callback,
    });
}
core.logger.debug = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'debug',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.error = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'error',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.info = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'info',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.request = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'request',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.response = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'response',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.verbose = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'verbose',
        'message': param.message,
        'callback': callback,
    });
}
core.logger.warning = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOGGER_PLUGIN', {
        'type': 'warning',
        'message': param.message,
        'callback': callback,
    });
}

//NETWORK_INFORMATION_PLUGIN
core.network = {};
core.network.downloadOneFile = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DOWNLOAD_PLUGIN', {
        'type': 'one',
        'downloadUrl': param.downloadUrl,
        'downloadTitle': param.downloadTitle,
        'downloadDescription': param.downloadDescription,
        'fileName': param.fileName,
        'pathType': param.pathType,
        'downloadPath': param.downloadPath,
        'showDialog': param.showDialog,
        'callback': callback,
    });
}
core.network.downloadMultipleFiles = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('DOWNLOAD_PLUGIN', {
        'type': 'multiple',
        'list': param.list,
        'callback': callback,
    });
}
core.network.getIpAddress = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('IP_ADDRESS_PLUGIN', {});
}
core.network.getNetworkInformation = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('NETWORK_INFO_PLUGIN', {
        'event_name': 'onNetworkStatusChange',
        'callback': callback,
    });
}

core.notification = {};
core.notification.requestPermission = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('NOTIFICATION_PLUGIN', {});
}
core.notification.sendPush = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOCAL_NOTIFICATION_PLUGIN', {
        "title": param.title,
        "message": param.message,
        "date_time": "",
        'callback': callback,
    });
}
core.notification.sendPushBySchedule = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('LOCAL_NOTIFICATION_PLUGIN', {
        "title": param.title,
        "message": param.message,
        "date_time": param.dateTime,
        'callback': callback,
    });
}

core.scanner = {};
core.scanner.openDocumentScanner = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('ML_KIT_DOCUMENT_SCANNER_PLUGIN', {});
}

core.sqlite = {};
core.sqlite.openDatabase = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'open',
        'database_name': param.databaseName,
        'callback': callback,
    });
}
core.sqlite.closeDatabase = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'close',
    });
}
core.sqlite.beginTransaction = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'begin_transaction',
    });
}
core.sqlite.endTransaction = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'end_transaction',
    });
}
core.sqlite.executeSql = function (param) {
    let bindDataArray = [];

    if (Array.isArray(param.bindData)) {
        // If already an array, ensure all elements are strings
        bindDataArray = param.bindData.map(String);
    } else if (typeof param.bindData === "string") {
        // If it's a string, split by commas (adjust as needed)
        bindDataArray = param.bindData.split(",");
    } else if (param.bindData != null) {
        // If it's a single value (number, object, etc.), convert to string inside an array
        bindDataArray = [String(param.bindData)];
    }

    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'execute_sql',
        'statement': param.statement,
        'bind_data': bindDataArray,
    });
}
core.sqlite.executeSqlSelect = function (param) {
    let bindDataArray = [];

    if (Array.isArray(param.bindData)) {
        // If already an array, ensure all elements are strings
        bindDataArray = param.bindData.map(String);
    } else if (typeof param.bindData === "string") {
        // If it's a string, split by commas (adjust as needed)
        bindDataArray = param.bindData.split(",");
    } else if (param.bindData != null) {
        // If it's a single value (number, object, etc.), convert to string inside an array
        bindDataArray = [String(param.bindData)];
    }

    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SQLITE_PLUGIN', {
        'type': 'execute_sql_select',
        'statement': param.statement,
        'bind_data': bindDataArray,
    });
}

//EXTERNAL_BROWSER_PLUGIN
core.url = {};
core.url.openExternalBrowser = function (param) {
    execute('EXTERNAL_BROWSER_PLUGIN', param);
}
core.url.openExternalMap = function (param) {
    execute('EXTERNAL_MAP_VIEWER_PLUGIN', {
        'latitude': param.latitude,
        'longitude': param.longitude,
    });
}

core.storage = {};
core.storage.get = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'get',
        'key': param.key,
        'callback': callback,
    });
}
core.storage.save = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'save',
        'key': param.key,
        'value': param.value,
        'callback': callback,
    });
}
core.storage.update = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'update',
        'key': param.key,
        'value': param.value,
        'callback': callback,
    });
}
core.storage.remove = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'remove',
        'key': param.key,
        'callback': callback,
    });
}
core.storage.clear = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'clear',
        'callback': callback,
    });
}
core.storage.getAll = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('STORAGE_PLUGIN', {
        'function': 'get_all',
        'callback': callback,
    });
}


core.system = {};
core.system.speechToText = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('SPEECH_TO_TEXT_PLUGIN', {
        language: param.language,
        description: param.description,
        'callback': callback,
    });
}
core.system.textToSpeech = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('TEXT_TO_SPEECH_PLUGIN', {
        language: param.language,
        text: param.text,
        'callback': callback,
    });
}
core.system.openInternalBrowser = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('INTERNAL_BROWSER_PLUGIN', {
        'url': param.url,
        'title': param.title != undefined ? param.title : 'Internal Browser',
        'backText': param.backText != undefined ? param.backText : 'Back',
        'navigationBarColor': param.navigationBarColor != undefined ? param.navigationBarColor : 'FF2196F3',
        'titleColor': param.titleColor != undefined ? param.titleColor : 'FFFFFF',
        'backTextColor': param.backTextColor != undefined ? param.backTextColor : 'FFFFFF',
    });
}

core.scanQRCode = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('QR_CODE_PLUGIN', {
        is_custom_ui: false,
        type: 'scan'
    });
}

core.browseQRCode = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('QR_CODE_PLUGIN', {
        type: 'browse'
    });
}


core.unityAds = {};
core.unityAds.initialize = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('UNITY_ADS_PLUGIN', {
        'type': 'initialize',
        'unityGameID': param.unityGameID,
        'testMode': param.testMode,
        'callback': callback,
    });
}
core.unityAds.showInterstitial = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('UNITY_ADS_PLUGIN', {
        'type': 'showInterstitial',
        'adUnitId': param.adUnitId,
        'callback': callback,
    });
}
core.unityAds.showRewardedVideo = function (param) {
    callback = param['callback'] !== undefined ? param['callback'] : null;
    execute('UNITY_ADS_PLUGIN', {
        'type': 'showRewardedVideo',
        'adUnitId': param.adUnitId,
        'callback': callback,
    });
}

// Alert Result
core.alertDialog = function (message) {
    core.dialog.showAlert({
        type: 'alert',
        title: 'Result',
        message: message,
        ok: 'OK',
        'callback': null,
    });
}



var getFormattedDate = function () {
    const now = new Date();

    // Extract the components of the current date and time
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format the date as yyyy-MM-dd HH:mm:ss
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Expose core to window so Native can call it
window.core = core;

// Export for React usage
export default core;
