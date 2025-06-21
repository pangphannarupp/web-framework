import { 
    ApplicaitonInterface, 
    BiometricInterface, 
    DeviceInterface, 
    DialogInterface, 
    EventInterface, 
    LoggerInterface, 
    NetworkInterface, 
    PlatformInterface, 
    SampleInterface, 
    UnityAdsInterface 
} from "../PlatformInterface";
import { WebApplication } from "./WebApplication";
import { WebBiometric } from "./WebBiometric";
import { WebDevice } from "./WebDevice";
import { WebDialog } from "./WebDialog";
import { WebLogger } from "./WebLogger";
import { WebNetwork } from "./WebNetwork";

export class WebPlatform implements PlatformInterface {
    getLogger(): LoggerInterface {
        return new WebLogger();
    }
    getDevice(): DeviceInterface {
        return new WebDevice();
    }
    getNetwork(): NetworkInterface {
        return new WebNetwork();
    }
    getPlatformName(): string {
        return "Web";
    }
    getApplication(): ApplicaitonInterface {
        return new WebApplication();
    }
    getBiometric(): BiometricInterface {
        return new WebBiometric();
    }
    getDialog(): DialogInterface {
        return new WebDialog();
    }
    getEvent(): EventInterface {
        throw new Error("Method not implemented.");
    }
    getSample(): SampleInterface {
        throw new Error("Method not implemented.");
    }
    getUnityAds(): UnityAdsInterface {
        throw new Error("Method not implemented.");
    }
    
}