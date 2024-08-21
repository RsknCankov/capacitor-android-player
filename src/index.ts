import { registerPlugin } from '@capacitor/core';

import type { CapacitorAndroidPlayerPlugin } from './definitions';

const CapacitorAndroidPlayer = registerPlugin<CapacitorAndroidPlayerPlugin>(
  'CapacitorAndroidPlayer',
  {
    web: () => import('./web').then(m => new m.CapacitorAndroidPlayerWeb()),
  },
);

export * from './definitions';
export { CapacitorAndroidPlayer };
