import core from "./../coreBridge";
import { LoggerInterface } from "../PlatformInterface";
import { DateTimeUtil } from "../../util/DateTimeUtil";

/**
 * MobileLogger class implements the LoggerInterface for mobile platforms.
 * This class handles logging functionality with both console output and WebSocket communication.
 * It supports different log levels (debug, error, info, request, response, verbose, warning)
 * and formats messages with timestamps and appropriate emoji indicators.
 */
export class MobileLogger implements LoggerInterface {
    /** Unique identifier for the socket connection */
    private socketCode: string = "";
    private socket: WebSocket | null | undefined;
    private dateTimeUtil = DateTimeUtil.getInstance();
    
    /**
     * Initializes the WebSocket connection and sets the socket code.
     * @param socket - The WebSocket instance to use for logging
     * @param socketCode - Unique identifier for the socket connection
     */
    initSocket(socket: WebSocket, socketCode: string): void {
        this.socket = socket;
        this.socketCode = socketCode;
    }

    /**
     * Logs a debug message with brown circle emoji (🟤).
     * @param message - The debug message to log
     */
    debug(message: string): void {
        core.logger.debug({message: message});
        console.debug(this.dateTimeUtil.getFormattedDate() + " : 🟤 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟤 " + message)
        };
    }

    /**
     * Logs an error message with red circle emoji (🔴).
     * @param message - The error message to log
     */
    error(message: string): void {
        core.logger.error({message: message});
        console.error(this.dateTimeUtil.getFormattedDate() + " : 🔴 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🔴 " + message)
        };
    }

    /**
     * Logs an info message with white circle emoji (⚪).
     * @param message - The info message to log
     */
    info(message: string): void {
        core.logger.info({message: message});
        console.info(this.dateTimeUtil.getFormattedDate() + " : ⚪ ", message);
        console.log("socket : " + this.socket);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "⚪ " + message)
        };
    }

    /**
     * Logs a request message with blue circle emoji (🔵).
     * @param message - The request message to log
     */
    request(message: string): void {
        core.logger.request({message: message});
        console.log(this.dateTimeUtil.getFormattedDate() + " : 🔵 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟤 " + message)
        };
    }

    /**
     * Logs a response message with green circle emoji (🟢).
     * @param message - The response message to log
     */
    response(message: string): void {
        core.logger.response({message: message});
        console.log(this.dateTimeUtil.getFormattedDate() + " : 🟢 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟤 " + message)
        };
    }

    /**
     * Logs a verbose message without any emoji.
     * @param message - The verbose message to log
     */
    verbose(message: string): void {
        core.logger.verbose({message: message});
        console.log(this.dateTimeUtil.getFormattedDate() + " : ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟤 " + message)
        };
    }

    /**
     * Logs a warning message with yellow circle emoji (🟡).
     * @param message - The warning message to log
     */
    warning(message: string): void {
        core.logger.warning({message: message});
        console.warn(this.dateTimeUtil.getFormattedDate() + " : 🟡 ", message);
        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(this.socketCode + "@@@" + "🟡 " + message)
        };
    }
}