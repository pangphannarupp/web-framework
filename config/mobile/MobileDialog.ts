import core from "./../coreBridge";
import { DialogInterface } from "../PlatformInterface";

export class MobileDialog implements DialogInterface {
    showAlertDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean> {
        return new Promise((resolve) => {
            core.dialog.showAlert({
                title: title,
                message: message,
                callback: (res: any) => {
                    const result = JSON.parse(res);
                    resolve(result.result);
                }
            });
        });
    }
    showConfirmDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean> {
        return new Promise((resolve) => {
            core.dialog.showAlert({
                type: 'confirm',
                title: title,
                message: message,
                callback: (res: any) => {
                    const result = JSON.parse(res);
                    resolve(result.result);
                }
            });
        });
    }
    showToast(message: string): void {
        console.log(`[MobileDialog] ${message}`);
    }
    showLoading(): void {
        console.log(`[MobileDialog] showLoading`);
    }
    hideLoading(): void {
        console.log(`[MobileDialog] hideLoading`);
    }
    showDatePicker(onSelected: void, onCancel: void): void {
        console.log(`[MobileDialog] showDatePicker`);
    }
    showTimePicker(onSelected: void, onCancel: void): void {
        console.log(`[MobileDialog] showTimePicker`);
    }
}