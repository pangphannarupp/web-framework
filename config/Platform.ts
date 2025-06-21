/**
 * Imports for platform-specific implementations
 */
import { MobilePlatform } from "./mobile/MobilePlatform";
import { PlatformInterface } from "./PlatformInterface";
import { WebPlatform } from "./web/WebPlatform";

/**
 * Determines and returns the appropriate platform implementation based on the user agent.
 * This function checks if the current environment is mobile (Android, iPhone, iPad, or iPod)
 * and returns the corresponding platform implementation.
 * 
 * @returns {PlatformInterface} An instance of either MobilePlatform or WebPlatform
 */
export function getPlatform(): PlatformInterface {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return new MobilePlatform(); // Mobile
    } else {
        return new WebPlatform(); // Default to Web
    }
}

/**
 * Checks if the current environment is a mobile device by examining the user agent string.
 * This function is used to determine if the application is running on a mobile device
 * (Android, iPhone, iPad, or iPod) or a web browser.
 * 
 * @returns {boolean} true if the current environment is a mobile device, false otherwise
 */
export function isMobile(): boolean {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true; // Mobile
    } else {
        return false; // Default to Web
    }
}

/**
 * The current platform instance that provides platform-specific functionality.
 * This is initialized once when the module is loaded.
 */
export const platform = getPlatform();

/**
 * Logger instance from the current platform.
 * Provides platform-specific logging capabilities.
 */
export const logger = getPlatform().getLogger();

/**
 * Boolean flag indicating whether the application is running on a mobile platform.
 * This is determined once when the module is loaded.
 */
export const isMobilePlatform = isMobile();