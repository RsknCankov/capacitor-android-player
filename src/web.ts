import { WebPlugin } from '@capacitor/core';

import type { CapacitorAndroidPlayerPlugin } from './definitions';

export class CapacitorAndroidPlayerWeb
  extends WebPlugin
  implements CapacitorAndroidPlayerPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
