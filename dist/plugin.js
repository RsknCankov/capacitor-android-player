var capacitorCapacitorAndroidPlayer = (function (exports, core) {
    'use strict';

    const CapacitorAndroidPlayer = core.registerPlugin('CapacitorAndroidPlayer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorAndroidPlayerWeb()),
    });

    class CapacitorAndroidPlayerWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorAndroidPlayerWeb: CapacitorAndroidPlayerWeb
    });

    exports.CapacitorAndroidPlayer = CapacitorAndroidPlayer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
