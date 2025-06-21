
import { MobileApplication } from "./MobileApplication";
import { MobileBiometric } from "./MobileBiometric";
import { MobileDialog } from "./MobileDialog";
import { MobileEvent } from "./MobileEvent";
import { MobileNetwork } from "./MobileNetwork";
import { MobileSample } from "./MobileSample";
import { MobileUnityAds } from "./MobileUnityAds";
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
    UnityAdsInterface,
    UrlInterface
} from "../PlatformInterface";
import { MobileDevice } from "./MobileDevice";
import { MobileLogger } from "./MobileLogger";


export class MobilePlatform implements PlatformInterface {
    getLogger(): LoggerInterface {
        return new MobileLogger();
    }
    getDevice(): DeviceInterface {
        return new MobileDevice();
    }
    getNetwork(): NetworkInterface {
        return new MobileNetwork();
    }
    getPlatformName(): string {
        return 'Mobile';
    }
    getApplication(): ApplicaitonInterface {
        return new MobileApplication();
    }
    getBiometric(): BiometricInterface {
        return new MobileBiometric();
    }
    getDialog(): DialogInterface {
        return new MobileDialog();
    }
    getEvent(): EventInterface {
        return new MobileEvent();
    }
    getSample(): SampleInterface {
        return new MobileSample();
    }
    getUnityAds(): UnityAdsInterface {
        return new MobileUnityAds();
    }
    // getUrl(): UrlInterface {
    //     return new MobileUrl();
    // }
}

