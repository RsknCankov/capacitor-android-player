import { WebPlugin } from '@capacitor/core';

import type {
  CapacitorAndroidPlayerPlugin,
  capVideoPlayerOptions,
  capVideoPlayerResult,
} from './definitions';

export class CapacitorAndroidPlayerWeb
  extends WebPlugin
  implements CapacitorAndroidPlayerPlugin
{
  playerStop(): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  initPlayer(options: capVideoPlayerOptions): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }

  isPlaying(): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setVideoUrl(options: { url: string }): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }

  playerPause(): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }

  exitPlayer(): Promise<capVideoPlayerResult> {
    return new Promise(resolve => {
      resolve({ result: true });
    });
  }
}
