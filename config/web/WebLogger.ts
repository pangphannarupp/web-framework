import { LoggerInterface } from "../PlatformInterface";
import { DateTimeUtil } from "../../util/DateTimeUtil";

export class WebLogger implements LoggerInterface {
    private socketCode: string = "";
    private socket: WebSocket | null | undefined;
    private dateTimeUtil = DateTimeUtil.getInstance();
    
    initSocket(socket: WebSocket, socketCode: string): void {
        this.socket = socket;
        this.socketCode = socketCode;
    }
    debug(message: string): void {
        console.debug(this.dateTimeUtil.getFormattedDate() + " : 🟤 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟤 " + message)
        };
    }
    error(message: string): void {
        console.error(this.dateTimeUtil.getFormattedDate() + " : 🔴 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🔴 " + message)
        };
    }
    info(message: string): void {
        console.info(this.dateTimeUtil.getFormattedDate() + " : ⚪ ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "⚪ " + message)
        };
    }
    request(message: string): void {
        console.log(this.dateTimeUtil.getFormattedDate() + " : 🔵 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            console.log("this.socket.readyState : " + this.socket.readyState);
            this.socket.send(this.socketCode + "@@@" + "🔵 " + message)
        };
    }
    response(message: string): void {
        console.log(this.dateTimeUtil.getFormattedDate() + " : 🟢 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟢 " + message)
        };
    }
    verbose(message: string): void {
        console.log(this.dateTimeUtil.getFormattedDate() + " : ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "⚪ " + message)
        };
    }
    warning(message: string): void {
        console.warn(this.dateTimeUtil.getFormattedDate() + " : 🟡 " + message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟡 " + message)
        };
    }
}