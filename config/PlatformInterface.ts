
export interface PlatformInterface {
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
    // getUrl(): UrlInterface;
}

export interface ApplicaitonInterface {
    getAppInfo(params?: { onSuccess?: (response: any) => void, onFailed?: (error: any) => void }): Promise<any>;
    exitApp(): void;
    hideSplash(): void;
    openAppSetting(): Promise<any>;
    restartApp(): void;
    setStatusBarColor(params?: {
        param: {
            backgroundColor: string,
            textColor: string,
        },
        onSuccess?: (response: any) => void,
        onFailed?: (error: any) => void
    }): Promise<any>;
}

export interface BiometricInterface {
    isAvailable(): boolean;
    isSupported(): boolean;
    showBiometricPrompt(params?: {
        param: {
            title: string,
            description: string,
            cancel_text: string,
            confirm_require?: boolean,
            allow_device_credential?: boolean
        },
        onSuccess?: (response: any) => void,
        onFailed?: (error: any) => void
    }
    ): Promise<any>;
    getBiometricType(): "none" | "face" | "fingerprint";
}

export interface DeviceInterface {
    showCamera(): Promise<any>;
}

export interface DialogInterface {
    showAlertDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean>;
    showConfirmDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean>;
    showToast(message: string): void;
    showLoading(): void;
    hideLoading(): void;
    showDatePicker(onSelected: void, onCancel: void): void;
    showTimePicker(onSelected: void, onCancel: void): void;
}

export interface EventInterface {
    registerEvent(eventName: string, callback: Function): void;
    responseEvent(eventName: string, data?: any): void;
}

export interface LoggerInterface {
    initSocket(socket: WebSocket, socketCode: string): void;
    debug(message: string): void;
    error(message: string): void;
    info(message: string): void;
    request(message: string): void;
    response(message: string): void;
    verbose(message: string): void;
    warning(message: string): void;
}

export interface NetworkInterface {
    getInformation(): Promise<any>;
    downloadOneFile(
        param: {
            downloadUrl: string,
            downloadTitle: string,
            downloadDescription: string,
            pathType: string,
            fileName: string,
            downloadPath: string,
            showDialog: boolean,
        },
        onSuccess?: (response: any) => void,
        onFailed?: (error: any) => void
    ): Promise<any>;
}

export interface SampleInterface {
    sampleMethod(): void;
}

export interface UnityAdsInterface {
    initialize(params: { unityGameID: string; testMode: boolean }, onSuccess: void, onFailed: void): void;
    showRewardedAd(params: { adUnitId: string }, onSuccess: void, onFailed: void): void;
    showInterstitialAd(params: { adUnitId: string }, onSuccess: void, onFailed: void): void;
}

export interface UrlInterface {
    openExternalBrowser(url: string): void;
    openExternalMap(latitude: number, longitude: number): void;
}