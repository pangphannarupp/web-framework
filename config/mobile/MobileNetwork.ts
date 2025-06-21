import { NetworkInterface } from "../PlatformInterface";
import core from "./../coreBridge";

export class MobileNetwork implements NetworkInterface {
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
        onSuccess?: (response: any) => void, onFailed?: (error: any) => void
    ): Promise<any> {
        return new Promise((resolve) => {
            core.network.downloadOneFile({
                downloadUrl: param.downloadUrl,
                downloadTitle: param.downloadTitle,
                downloadDescription: param.downloadDescription,
                fileName: param.fileName,
                pathType: param.pathType,
                downloadPath: param.downloadPath,
                showDialog: param.showDialog,
                callback: (response: any) => {
                    try {
                        const result = JSON.parse(response);
                        if (result) {
                            onSuccess?.(result);
                        } else {
                            onFailed?.(result);
                        }
                        resolve(result);
                    } catch (error) {
                        onFailed?.(error);
                        resolve(error);
                    }
                }
            })
        });
    }
    getInformation(): Promise<any> {
        return new Promise((resolve) => {
            core.network.getNetworkInformation({
                callback: (response: any) => {
                    try {
                        resolve(JSON.parse(response));
                    } catch (error) {
                        resolve(error);
                    }
                }
            })
        });
    }
}