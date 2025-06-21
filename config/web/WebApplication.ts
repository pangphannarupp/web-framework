// import packageJson from "./../../../../package.json"; // Adjust path if needed.≥
// import DeviceInfo from "react-native-device-info";
import { ApplicaitonInterface } from "../PlatformInterface";

export class WebApplication implements ApplicaitonInterface {
    async openAppSetting(): Promise<object> {
        return new Promise((resolve) => {
            resolve({
                result: false,
                errorCode: 1,
                errorMessage: "Not supported."
            });
        });
    }
    restartApp(): void {
        // const newTab = window.open("http://localhost:8080", "_blank");
        // setTimeout(() => newTab?.close(), 400); // Closes after 3 sec
        // window.location.reload();
        window.location.href = "/";
    }
    async getAppInfo(params?: { onSuccess?: (response: object) => void, onFailed?: (error: object) => void }): Promise<object> {
        return new Promise((resolve) => {
            const locale: string = navigator.language;
            const language: string = locale.split("-")[0];
            const isMobile: boolean = /Mobi|Android|iPhone/i.test(navigator.userAgent);
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            let deviceId = localStorage.getItem("deviceId");

            if (!deviceId) {
                deviceId = crypto.randomUUID(); // Generate a unique ID
                localStorage.setItem("deviceId", deviceId);
            }

            params?.onSuccess?.({
                result: true,
                deviceType: isMobile ? "Mobile" : "Desktop",
                language: language,
                locale: locale,
                orientation: window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape",
                os: "Web",
                // appName: packageJson.name,
                // packageName: packageJson.name,
                // appVersion: packageJson.version,
                themeMode: isDarkMode ? "dark" : "light",
                model: navigator.userAgent,
                deviceId: deviceId
            });
            resolve({
                result: true,
                deviceType: isMobile ? "Mobile" : "Desktop",
                language: language,
                locale: locale,
                orientation: window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape",
                os: "Web",
                // appName: packageJson.name,
                // packageName: packageJson.name,
                // appVersion: packageJson.version,
                themeMode: isDarkMode ? "dark" : "light",
                model: navigator.userAgent,
                deviceId: deviceId
            });
        });
    }
    exitApp(): void {
        window.close();
    }
    hideSplash(): void {
        console.log("Hide splash.");
    }
    async setStatusBarColor(params?: { 
        param: {
            backgroundColor: string,
            textColor: string,
        },
        onSuccess?: (response: object) => void, 
        onFailed?: (error: object) => void 
    }): Promise<object> {
        return new Promise((resolve) => {
            params?.onSuccess?.({result: true});
            resolve({result: true});
        });
    }
}