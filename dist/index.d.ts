declare namespace core {
    let isMobile: boolean;
    let isAndroid: boolean;
    let isIOS: boolean;
    function openSetting(): void;
    namespace native {
        function sample(param: any): void;
    }
    /**
    * Event Listener
    * used to listen response from Native
    */
    function onEventListener(eventType: any, ...args: any[]): void;
    /**
    * Add Event Listener
    * used to add event at client
    */
    function addEventListener(eventType: any, func: any): void;
    function removeEventListener(eventType: any, func: any): void;
    function removeAllEventListeners(eventType: any): void;
    function clearEventListeners(): void;
    /**
    * Callback Listener
    * used to listen response from Native
    */
    function callback(result: any, scf: any): void;
    namespace admob {
        function initialize(param: any): void;
        function showInterstitial(param: any): void;
        function showRewardedInterstitial(param: any): void;
        function showRewarded(param: any): void;
    }
    namespace application {
        function appInfo(param: any): void;
        function exitApp(param: any): void;
        function openAppSetting(param: any): void;
        function hideSplash(param: any): void;
        function restartApp(param: any): void;
        function setStatusBarColor(param: any): void;
    }
    namespace biometric {
        function showBiometricPrompt(param: any): void;
    }
    function copyToClipboard(param: any): void;
    namespace device {
        function getGPS(param: any): void;
        function setIsMobile(result: any): void;
        function setIsAndroid(result: any): void;
        function setIsIOS(result: any): void;
        function showCamera(param: any): void;
        function getTheme(param: any): void;
        function setTheme(param: any): void;
        function registerSmsRetriever(param: any): void;
        function unregisterSmsRetriever(param: any): void;
        function shareFile(param: any): void;
        function shareImage(param: any): void;
        function shareLink(param: any): void;
        function shareText(param: any): void;
        function getOrientation(param: any): void;
        function setOrientation(param: any): void;
        function registerFaceUpDown(param: any): void;
        function unregisterFaceUpDown(param: any): void;
    }
    namespace dialog {
        function showAlert(param: any): void;
        function showConfirm(param: any): void;
        function showLoading(param: any): void;
        function hideLoading(param: any): void;
        function showDatePicker(param: any): void;
        function showTimePicker(param: any): void;
        function showToast(param: any): void;
    }
    namespace encdec {
        function generateSHA(param: any): void;
        function encrypt(param: any): void;
        function decrypt(param: any): void;
    }
    namespace file {
        export function openFileLibrary(param: any): void;
        export function openImageGallery(param: any): void;
        export function openPdf(param: any): void;
        export function isExist(param: any): void;
        function _delete(param: any): void;
        export { _delete as delete };
        export function copy(param: any): void;
        export function move(param: any): void;
        export function info(param: any): void;
        export function create(param: any): void;
        export function createDirectory(param: any): void;
        export function deleteDirectory(param: any): void;
    }
    namespace firebase {
        function checkRemoteConfig(param: any): void;
    }
    namespace ironSourceAds {
        function initialize(param: any): void;
        function loadInterstitial(param: any): void;
        function showInterstitial(param: any): void;
        function loadRewardedVideo(param: any): void;
        function showRewardedVideo(param: any): void;
    }
    namespace logger {
        function record(param: any): void;
        function stop(param: any): void;
        function clear(param: any): void;
        function show(param: any): void;
        function debug(param: any): void;
        function error(param: any): void;
        function info(param: any): void;
        function request(param: any): void;
        function response(param: any): void;
        function verbose(param: any): void;
        function warning(param: any): void;
    }
    namespace network {
        function downloadOneFile(param: any): void;
        function downloadMultipleFiles(param: any): void;
        function getIpAddress(param: any): void;
        function getNetworkInformation(param: any): void;
    }
    namespace notification {
        function requestPermission(param: any): void;
        function sendPush(param: any): void;
        function sendPushBySchedule(param: any): void;
    }
    namespace scanner {
        function openDocumentScanner(param: any): void;
    }
    namespace sqlite {
        function openDatabase(param: any): void;
        function closeDatabase(param: any): void;
        function beginTransaction(param: any): void;
        function endTransaction(param: any): void;
        function executeSql(param: any): void;
        function executeSqlSelect(param: any): void;
    }
    namespace url {
        function openExternalBrowser(param: any): void;
        function openExternalMap(param: any): void;
    }
    namespace storage {
        function get(param: any): void;
        function save(param: any): void;
        function update(param: any): void;
        function remove(param: any): void;
        function clear(param: any): void;
        function getAll(param: any): void;
    }
    namespace system {
        function speechToText(param: any): void;
        function textToSpeech(param: any): void;
        function openInternalBrowser(param: any): void;
    }
    function scanQRCode(param: any): void;
    function browseQRCode(param: any): void;
    namespace unityAds {
        function initialize(param: any): void;
        function showInterstitial(param: any): void;
        function showRewardedVideo(param: any): void;
    }
    function alertDialog(message: any): void;
}

interface PlatformInterface {
    getPlatformName(): string;
    getApplication(): ApplicaitonInterface;
    getBiometric(): BiometricInterface;
    getDevice(): DeviceInterface;
    getDialog(): DialogInterface;
    getEvent(): EventInterface;
    getLogger(): LoggerInterface;
    getNetwork(): NetworkInterface;
    getSample(): SampleInterface;
    getUnityAds(): UnityAdsInterface;
}
interface ApplicaitonInterface {
    getAppInfo(params?: {
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
    exitApp(): void;
    hideSplash(): void;
    openAppSetting(): Promise<any>;
    restartApp(): void;
    setStatusBarColor(params?: {
        param: {
            backgroundColor: string;
            textColor: string;
        };
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
}
interface BiometricInterface {
    isAvailable(): boolean;
    isSupported(): boolean;
    showBiometricPrompt(params?: {
        param: {
            title: string;
            description: string;
            cancel_text: string;
            confirm_require?: boolean;
            allow_device_credential?: boolean;
        };
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
    getBiometricType(): "none" | "face" | "fingerprint";
}
interface DeviceInterface {
    showCamera(): Promise<any>;
}
interface DialogInterface {
    showAlertDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showConfirmDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showToast(message: string): void;
    showLoading(): void;
    hideLoading(): void;
    showDatePicker(onSelected: void, onCancel: void): void;
    showTimePicker(onSelected: void, onCancel: void): void;
}
interface EventInterface {
    registerEvent(eventName: string, callback: Function): void;
    addEventListener(eventName: string, callback: Function): void;
    removeEventListener(eventName: string, callback: Function): void;
    removeAllEventListeners(eventName: string, callback: Function): void;
    clearEventListeners(eventName: string, callback: Function): void;
}
interface LoggerInterface {
    initSocket(socket: WebSocket, socketCode: string): void;
    debug(message: string): void;
    error(message: string): void;
    info(message: string): void;
    request(message: string): void;
    response(message: string): void;
    verbose(message: string): void;
    warning(message: string): void;
}
interface NetworkInterface {
    getInformation(): Promise<any>;
    downloadOneFile(param: {
        downloadUrl: string;
        downloadTitle: string;
        downloadDescription: string;
        pathType: string;
        fileName: string;
        downloadPath: string;
        showDialog: boolean;
    }, onSuccess?: (response: any) => void, onFailed?: (error: any) => void): Promise<any>;
}
interface SampleInterface {
    sampleMethod(): void;
}
interface UnityAdsInterface {
    initialize(params: {
        unityGameID: string;
        testMode: boolean;
    }, onSuccess: void, onFailed: void): void;
    showRewardedAd(params: {
        adUnitId: string;
    }, onSuccess: void, onFailed: void): void;
    showInterstitialAd(params: {
        adUnitId: string;
    }, onSuccess: void, onFailed: void): void;
}
interface UrlInterface {
    openExternalBrowser(url: string): void;
    openExternalMap(latitude: number, longitude: number): void;
}

/**
 * Determines and returns the appropriate platform implementation based on the user agent.
 * This function checks if the current environment is mobile (Android, iPhone, iPad, or iPod)
 * and returns the corresponding platform implementation.
 *
 * @returns {PlatformInterface} An instance of either MobilePlatform or WebPlatform
 */
declare function getPlatform(): PlatformInterface;
/**
 * Checks if the current environment is a mobile device by examining the user agent string.
 * This function is used to determine if the application is running on a mobile device
 * (Android, iPhone, iPad, or iPod) or a web browser.
 *
 * @returns {boolean} true if the current environment is a mobile device, false otherwise
 */
declare function isMobile(): boolean;
/**
 * The current platform instance that provides platform-specific functionality.
 * This is initialized once when the module is loaded.
 */
declare const platform: PlatformInterface;
/**
 * Logger instance from the current platform.
 * Provides platform-specific logging capabilities.
 */
declare const logger: LoggerInterface;
/**
 * Boolean flag indicating whether the application is running on a mobile platform.
 * This is determined once when the module is loaded.
 */
declare const isMobilePlatform: boolean;
declare const eventPlatform: EventInterface;

declare class WebApplication implements ApplicaitonInterface {
    openAppSetting(): Promise<object>;
    restartApp(): void;
    getAppInfo(params?: {
        onSuccess?: (response: object) => void;
        onFailed?: (error: object) => void;
    }): Promise<object>;
    exitApp(): void;
    hideSplash(): void;
    setStatusBarColor(params?: {
        param: {
            backgroundColor: string;
            textColor: string;
        };
        onSuccess?: (response: object) => void;
        onFailed?: (error: object) => void;
    }): Promise<object>;
}

declare class WebBiometric implements BiometricInterface {
    isAvailable(): boolean;
    isSupported(): boolean;
    showBiometricPrompt(params?: {
        param: {
            title: string;
            description: string;
            cancel_text: string;
            confirm_require?: boolean;
            allow_device_credential?: boolean;
        };
        onSuccess?: (response: object) => void;
        onFailed?: (error: object) => void;
    }): Promise<object>;
    getBiometricType(): "none" | "face" | "fingerprint";
}

declare class WebDevice implements DeviceInterface {
    showCamera(callback?: {
        onSuccess?: (object: any) => void;
        onFailed?: (object: any) => void;
    }): Promise<object>;
}

declare class WebDialog implements DialogInterface {
    showAlertDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showConfirmDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showToast(message: string): void;
    showLoading(): void;
    hideLoading(): void;
    showDatePicker(onSelected: void, onCancel: void): void;
    showTimePicker(onSelected: void, onCancel: void): void;
}

declare class WebLogger implements LoggerInterface {
    private socketCode;
    private socket;
    private dateTimeUtil;
    initSocket(socket: WebSocket, socketCode: string): void;
    debug(message: string): void;
    error(message: string): void;
    info(message: string): void;
    request(message: string): void;
    response(message: string): void;
    verbose(message: string): void;
    warning(message: string): void;
}

declare class WebNetwork implements NetworkInterface {
    downloadOneFile(param: {
        downloadUrl: string;
        downloadTitle: string;
        downloadDescription: string;
        pathType: string;
        fileName: string;
        downloadPath: string;
        showDialog: boolean;
    }, onSuccess?: (response: object) => void, onFailed?: (error: object) => void): Promise<object>;
    getInformation(): Promise<object>;
}

declare class WebPlatform implements PlatformInterface {
    getLogger(): LoggerInterface;
    getDevice(): DeviceInterface;
    getNetwork(): NetworkInterface;
    getPlatformName(): string;
    getApplication(): ApplicaitonInterface;
    getBiometric(): BiometricInterface;
    getDialog(): DialogInterface;
    getEvent(): EventInterface;
    getSample(): SampleInterface;
    getUnityAds(): UnityAdsInterface;
}

declare class MobileApplication implements ApplicaitonInterface {
    openAppSetting(): Promise<any>;
    restartApp(): void;
    getAppInfo(params?: {
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
    exitApp(): void;
    hideSplash(): void;
    setStatusBarColor(params?: {
        param: {
            backgroundColor: string;
            textColor: string;
        };
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
}

declare class MobileBiometric implements BiometricInterface {
    isAvailable(): boolean;
    isSupported(): boolean;
    showBiometricPrompt(params?: {
        param: {
            title: string;
            description: string;
            cancel_text: string;
            confirm_require?: boolean;
            allow_device_credential?: boolean;
        };
        onSuccess?: (response: any) => void;
        onFailed?: (error: any) => void;
    }): Promise<any>;
    getBiometricType(): "none" | "face" | "fingerprint";
}

declare class MobileDevice implements DeviceInterface {
    showCamera(callback?: {
        onSuccess?: (object: any) => void;
        onFailed?: (object: any) => void;
    }): Promise<any>;
}

declare class MobileDialog implements DialogInterface {
    showAlertDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showConfirmDialog(title: string, message: string, openDialogFunction?: (data: {
        title: string;
        message: string;
        showCancel: boolean;
    }) => Promise<boolean>): Promise<boolean>;
    showToast(message: string): void;
    showLoading(): void;
    hideLoading(): void;
    showDatePicker(onSelected: void, onCancel: void): void;
    showTimePicker(onSelected: void, onCancel: void): void;
}

declare class MobileEvent implements EventInterface {
    registerEvent(eventName: string, callback: Function): void;
    addEventListener(eventName: string, callback: Function): void;
    removeEventListener(eventName: string, callback: Function): void;
    removeAllEventListeners(eventName: string): void;
    clearEventListeners(): void;
}

/**
 * MobileLogger class implements the LoggerInterface for mobile platforms.
 * This class handles logging functionality with both console output and WebSocket communication.
 * It supports different log levels (debug, error, info, request, response, verbose, warning)
 * and formats messages with timestamps and appropriate emoji indicators.
 */
declare class MobileLogger implements LoggerInterface {
    /** Unique identifier for the socket connection */
    private socketCode;
    private socket;
    private dateTimeUtil;
    /**
     * Initializes the WebSocket connection and sets the socket code.
     * @param socket - The WebSocket instance to use for logging
     * @param socketCode - Unique identifier for the socket connection
     */
    initSocket(socket: WebSocket, socketCode: string): void;
    /**
     * Logs a debug message with brown circle emoji (🟤).
     * @param message - The debug message to log
     */
    debug(message: string): void;
    /**
     * Logs an error message with red circle emoji (🔴).
     * @param message - The error message to log
     */
    error(message: string): void;
    /**
     * Logs an info message with white circle emoji (⚪).
     * @param message - The info message to log
     */
    info(message: string): void;
    /**
     * Logs a request message with blue circle emoji (🔵).
     * @param message - The request message to log
     */
    request(message: string): void;
    /**
     * Logs a response message with green circle emoji (🟢).
     * @param message - The response message to log
     */
    response(message: string): void;
    /**
     * Logs a verbose message without any emoji.
     * @param message - The verbose message to log
     */
    verbose(message: string): void;
    /**
     * Logs a warning message with yellow circle emoji (🟡).
     * @param message - The warning message to log
     */
    warning(message: string): void;
}

declare class MobileNetwork implements NetworkInterface {
    downloadOneFile(param: {
        downloadUrl: string;
        downloadTitle: string;
        downloadDescription: string;
        pathType: string;
        fileName: string;
        downloadPath: string;
        showDialog: boolean;
    }, onSuccess?: (response: any) => void, onFailed?: (error: any) => void): Promise<any>;
    getInformation(): Promise<any>;
}

declare class MobilePlatform implements PlatformInterface {
    getLogger(): LoggerInterface;
    getDevice(): DeviceInterface;
    getNetwork(): NetworkInterface;
    getPlatformName(): string;
    getApplication(): ApplicaitonInterface;
    getBiometric(): BiometricInterface;
    getDialog(): DialogInterface;
    getEvent(): EventInterface;
    getSample(): SampleInterface;
    getUnityAds(): UnityAdsInterface;
}

declare class MobileSample implements SampleInterface {
    sampleMethod(): void;
}

declare class MobileUnityAds implements UnityAdsInterface {
    initialize(params: {
        unityGameID: string;
        testMode: boolean;
    }, onSuccess: void, onFailed: void): void;
    showInterstitialAd(params: {
        adUnitId: string;
    }, onSuccess: void, onFailed: void): void;
    showRewardedAd(params: {
        adUnitId: string;
    }, onSuccess: void, onFailed: void): void;
}

declare class DateTimeUtil {
    getFormattedDate(): string;
    formatDate(date: Date): string;
    formatDateOnly(date: Date): string;
    formatTimeOnly(date: Date): string;
    getUnixTimestamp(date?: Date): number;
    getMillisecondsTimestamp(date?: Date): number;
    fromUnixTimestamp(unix: number): Date;
    addDays(date: Date, days: number): Date;
    addMinutes(date: Date, minutes: number): Date;
    addSeconds(date: Date, seconds: number): Date;
    isSameDay(date1: Date, date2: Date): boolean;
    isToday(date: Date): boolean;
    isBeforeNow(date: Date): boolean;
    isAfterNow(date: Date): boolean;
    getTimeAgo(date: Date): string;
    convertDateToString(date: Date, format?: string): string;
    convertStringToDate(dateString: string, format?: string): Date | null;
    calculateDaysBetween(startDate: string, endDate: string, format?: string): number | null;
    convertEnglishMonthToKhmer(dateString: string): string | null;
    findPreviousWeekAgo(weeksAgo: number): Date;
    findNextWeek(weeksAhead: number): Date;
    findPreviousMonthAgo(monthsAgo: number): Date;
    findNextMonth(monthsAhead: number): Date;
    getCurrentDate(format?: string): string;
    getDayTwoDigit(day: number): string;
    getMonthText(monthNumber: number): string;
    isCurrentTimeInRange(startTime: string, endTime: string): boolean;
    isInNightTimeRange(startHour: number, startMinute: number, endHour: number, endMinute: number): boolean;
    isTodayInRange(startDateTime: string, endDateTime: string): boolean;
    private readonly khmerMonths;
    private readonly englishMonths;
    private static instance;
    private constructor();
    static getInstance(): DateTimeUtil;
}

type Observer<T> = (value: T) => void;
declare class LiveData<T> {
    private observers;
    private _value;
    constructor(initialValue: T);
    get value(): T;
    set value(newValue: T);
    observe(observer: Observer<T>): () => void;
    private notifyObservers;
    private removeObserver;
}
interface DataStore {
    data: LiveData<any>;
}

/**
 * CONFIG
*/

export { type ApplicaitonInterface, type BiometricInterface, type DataStore, DateTimeUtil, type DeviceInterface, type DialogInterface, type EventInterface, LiveData, type LoggerInterface, MobileApplication, MobileBiometric, MobileDevice, MobileDialog, MobileEvent, MobileLogger, MobileNetwork, MobilePlatform, MobileSample, MobileUnityAds, type NetworkInterface, type PlatformInterface, type SampleInterface, type UnityAdsInterface, type UrlInterface, WebApplication, WebBiometric, WebDevice, WebDialog, WebLogger, WebNetwork, WebPlatform, core as default, eventPlatform, getPlatform, isMobile, isMobilePlatform, logger, platform };
