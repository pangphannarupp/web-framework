import { NetworkInterface } from "../PlatformInterface";

export class WebNetwork implements NetworkInterface {
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
        onSuccess?: (response: object) => void, onFailed?: (error: object) => void
    ): Promise<object> {
        return new Promise((resolve) => {
            onFailed?.({
                result: false,
                errorCode: 1,
                errorMessage: "No implementation"
            })
            resolve({
                result: false,
                errorCode: 1,
                errorMessage: "No implementation"
            })
        });
    }
    getInformation(): Promise<object> {
        return new Promise((resolve) => {
            resolve({
                result: true,
                status: navigator.onLine,
                type: "Unknown",
                signal_strength: "Unknown",
            });
        });
    }
}