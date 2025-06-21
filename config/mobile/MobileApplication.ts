import core from "./../coreBridge";
import { ApplicaitonInterface } from "../PlatformInterface";

export class MobileApplication implements ApplicaitonInterface {
    async openAppSetting(): Promise<any> {
        return new Promise((resolve) => {
            core.application.openAppSetting({ callback: (res: any) => {
                try {
                    const result = JSON.parse(res);
                    resolve(result);
                } catch (error) {
                    resolve(error);
                }
            }});
        });
    }
    restartApp(): void {
        core.application.restartApp({ callback: (res: any) => {}});
    }
    async getAppInfo(params?: {onSuccess?: (response: any) => void, onFailed?: (error: any) => void}): Promise<any> {
        return new Promise((resolve) => {
            core.application.appInfo({
                callback: (res: any) => {
                    try {
                        const result = JSON.parse(res);
                        params?.onSuccess?.(result);
                        resolve(result);
                    } catch (error) {
                        params?.onFailed?.(error);
                        resolve(error);
                    }
                },
            });
        });
        
    }
    exitApp(): void {
        core.application.exitApp();
    }
    hideSplash(): void {
        core.application.hideSplash();
    }
    setStatusBarColor(params?: { 
        param: {
            backgroundColor: string,
            textColor: string,
        },
        onSuccess?: (response: any) => void, 
        onFailed?: (error: any) => void 
    }): Promise<any> {
        return new Promise((resolve) => {
            core.application.setStatusBarColor({
                background_color: params?.param.backgroundColor,
                text_color: params?.param.textColor,
                callback: (res: any) => {
                    try {
                        const result = JSON.parse(res);
                        params?.onSuccess?.(result);
                        resolve(result);
                    } catch (error) {
                        params?.onFailed?.(error);
                        resolve(error);
                    }
                }
            });
        });
    }
}