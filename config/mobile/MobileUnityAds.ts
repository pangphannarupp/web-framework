import core from "./../coreBridge";
import { UnityAdsInterface } from "../PlatformInterface";

export class MobileUnityAds implements UnityAdsInterface {
    initialize(params: { unityGameID: string; testMode: boolean; }, onSuccess: void, onFailed: void): void {
        core.unityAds.initialize({unityGameID: params.unityGameID, testMode: params.testMode});
    }
    showInterstitialAd(params: { adUnitId: string; }, onSuccess: void, onFailed: void): void {
        core.unityAds.showInterstitial({adUnitId: params.adUnitId, onSuccess, onFailed});
    }
    showRewardedAd(params: { adUnitId: string; }, onSuccess: void, onFailed: void): void {
        core.unityAds.showInterstitial({adUnitId: params.adUnitId, onSuccess, onFailed});
    }
}