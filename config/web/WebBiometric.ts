import { BiometricInterface } from "../PlatformInterface";

export class WebBiometric implements BiometricInterface {
    isAvailable(): boolean {
        return false;
    }
    isSupported(): boolean {
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
        onSuccess?: (response: object) => void, 
        onFailed?: (error: object) => void}
    ): Promise<object> {
        return new Promise((resolve) => {
            resolve({
                result: false,
                errorCode: 1,
                errorMessage: "Biometric is not supported."
            });
        });
    }
    getBiometricType(): "none" | "face" | "fingerprint" {
        return "none";
    }
}