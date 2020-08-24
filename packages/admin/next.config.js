const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules')(['@bcdapps/ui']); // pass the modules you would like to see transpiled
const withImages = require('next-images');
const path = require('path');
// https://spectrum.chat/thread/ba3668b1-f0b1-42a6-9c71-d7d9d3b67f04
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
  require.extensions['.css'] = file => {};
}

const _cfg = (cfg, extra) => Object.assign(cfg || {}, extra);

const _css = cfg => withCSS(_cfg(cfg, {}));
const _combine = fns => fns.reduce((result, fn) => fn(result), {});

const _wtm = cfg => withTM(_cfg(cfg, {}));
module.exports = _combine([_css, _wtm]);
