import React, { createContext, ReactNode, useContext, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

import { DialogInterface } from "../PlatformInterface";


export class WebDialog implements DialogInterface {
    async showAlertDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean> {
        return new Promise(async (resolve) => {
            const response = await openDialogFunction?.({title: title, message: message, showCancel: false});
            resolve(response || false);
        });
    }
    async showConfirmDialog(title: string, message: string, openDialogFunction?: (data: { title: string; message: string, showCancel: boolean }) => Promise<boolean>): Promise<boolean> {
        return new Promise(async (resolve) => {
            const response = await openDialogFunction?.({title: title, message: message, showCancel: true});
            resolve(response || false);
        });
    }
    showToast(message: string): void {
        throw new Error("Method not implemented.");
    }
    showLoading(): void {
        throw new Error("Method not implemented.");
    }
    hideLoading(): void {
        throw new Error("Method not implemented.");
    }
    showDatePicker(onSelected: void, onCancel: void): void {
        throw new Error("Method not implemented.");
    }
    showTimePicker(onSelected: void, onCancel: void): void {
        throw new Error("Method not implemented.");
    }

}