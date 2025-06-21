import core from "./../coreBridge";
import { DeviceInterface } from "../PlatformInterface";

export class MobileDevice implements DeviceInterface {
    showCamera(callback?: {onSuccess?: (object: any) => void, onFailed?: (object: any) => void}): Promise<any> {
        return new Promise((resolve) => {
            core.device.showCamera({
                callback: (response: any) => {
                    try {
                        const result = JSON.parse(response);
                        if (result.result) {
                            callback?.onSuccess?.(result);
                        } else {
                            callback?.onFailed?.(result);
                        }
                        resolve(result);
                    } catch(error) {
                        callback?.onFailed?.(error);
                        resolve(error);
                    }
                }
            });
        });
    }
}