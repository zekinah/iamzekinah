'use strict';

module.exports = {
    pwa: {
      name: 'iamzekinah',
      themeColor: '#81ABAE',
      msTileColor: '#223140',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'dev/sw.js',
      }
    }
  }