import { registerPlugin } from '@capacitor/core';
const CapacitorAndroidPlayer = registerPlugin('CapacitorAndroidPlayer', {
    web: () => import('./web').then(m => new m.CapacitorAndroidPlayerWeb()),
});
export * from './definitions';
export { CapacitorAndroidPlayer };
//# sourceMappingURL=index.js.map