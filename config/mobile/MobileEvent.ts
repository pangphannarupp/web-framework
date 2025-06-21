import { EventInterface } from "../PlatformInterface";

export class MobileEvent implements EventInterface {
    registerEvent(eventName: string, callback: Function): void {
        throw new Error("Method not implemented.");
    }
    responseEvent(eventName: string, data?: any): void {
        throw new Error("Method not implemented.");
    }
    addListener(eventName: string, callback: void): void {
        console.log(`[MobileEvent] addListener: ${eventName}`);
    }
    removeListener(eventName: string, callback: void): void {
        console.log(`[MobileEvent] removeListener: ${eventName}`);
    }
    removeAllListeners(eventName: string): void {
        console.log(`[MobileEvent] removeAllListeners: ${eventName}`);
    }
    emit(eventName: string, data: object): void {
        console.log(`[MobileEvent] emit: ${eventName}`);
    }
}