import core from "./../coreBridge";
import { BiometricInterface } from "../PlatformInterface";

export class MobileBiometric implements BiometricInterface {
    isAvailable(): boolean {
        // return core.isBiometricAvailable();
        return false;
    }
    isSupported(): boolean {
        // return core.isBiometricSupported();
        return false;
    }
    async showBiometricPrompt(params?: {
        param: { 
            title: string, 
            description: string, 
            cancel_text: string, 
            confirm_require?: boolean, 
            allow_device_credential?: boolean
        }, 
        onSuccess?: (response: any) => void, 
        onFailed?: (error: any) => void}
    ): Promise<any> {
        return new Promise((resolve) => {
            core.biometric.showBiometricPrompt({
                title: params?.param.title,
                description: params?.param.description,
                cancel_text: params?.param.cancel_text,
                confirm_require: params?.param.confirm_require,
                allow_device_credential: params?.param.allow_device_credential,
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
    getBiometricType(): "none" | "face" | "fingerprint" {
        // return core.getBiometricType();
        return "none";
    }
}