import { WebPlugin } from '@capacitor/core';
import type { CapacitorAndroidPlayerPlugin, capVideoPlayerOptions, capVideoPlayerResult } from './definitions';
export declare class CapacitorAndroidPlayerWeb extends WebPlugin implements CapacitorAndroidPlayerPlugin {
    playerStop(): Promise<capVideoPlayerResult>;
    initPlayer(options: capVideoPlayerOptions): Promise<capVideoPlayerResult>;
    isPlaying(): Promise<capVideoPlayerResult>;
    setVideoUrl(options: {
        url: string;
    }): Promise<capVideoPlayerResult>;
    playerPause(): Promise<capVideoPlayerResult>;
    exitPlayer(): Promise<capVideoPlayerResult>;
}
