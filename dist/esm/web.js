import { WebPlugin } from '@capacitor/core';
export class CapacitorAndroidPlayerWeb extends WebPlugin {
    playerStop() {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initPlayer(options) {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
    isPlaying() {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setVideoUrl(options) {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
    playerPause() {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
    exitPlayer() {
        return new Promise(resolve => {
            resolve({ result: true });
        });
    }
}
//# sourceMappingURL=web.js.map