import { DeviceInterface } from "../PlatformInterface";

export class WebDevice implements DeviceInterface {
    showCamera(callback?: { onSuccess?: (object: any) => void, onFailed?: (object: any) => void }): Promise<object> {
        return new Promise((resolve) => {
            callback?.onFailed?.({
                result: false,
                errorCode: 1,
                errorMessage: "No implementation"
            })
            resolve({
                result: false,
                errorCode: 1,
                errorMessage: "No implementation"
            });
        });
    }
}