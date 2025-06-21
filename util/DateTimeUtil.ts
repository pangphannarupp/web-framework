export class DateTimeUtil {

    getFormattedDate(): string {
        const now = new Date();
    
        // Extract the components of the current date and time
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    
        // Format the date as yyyy-MM-dd HH:mm:ss
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    
    // Static property to hold the single instance
    private static instance: DateTimeUtil;

    // Private constructor to prevent direct instantiation
    private constructor() {
        console.log("Singleton instance created!");
    }

    // Public method to get the instance of the class
    public static getInstance(): DateTimeUtil {
        if (!DateTimeUtil.instance) {
            DateTimeUtil.instance = new DateTimeUtil();
        }
        return DateTimeUtil.instance;
    }

}