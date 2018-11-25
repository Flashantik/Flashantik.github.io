importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/47e804a3008922cd7086.js",
    "revision": "0ef2b82d2c6eda65401a18574a08ea90"
  },
  {
    "url": "/_nuxt/596e5d011122cb848f59.js",
    "revision": "0ba6872ca70a15957d6f3fce9b833d51"
  },
  {
    "url": "/_nuxt/7beca5d7cb2e2b84f34b.css",
    "revision": "95714ff40d426770b858f38bb804c793"
  },
  {
    "url": "/_nuxt/8384eec63ebd6eac4b49.js",
    "revision": "9182a9e6b4912d20572fbb078c509cd5"
  },
  {
    "url": "/_nuxt/97f806f1ce3700537b25.js",
    "revision": "3e44f649b8f3ec0c66633af0be23a82e"
  },
  {
    "url": "/_nuxt/a9c174e772f67ecdedae.js",
    "revision": "a3712865b87cd1f1f9a5894f0db715e5"
  },
  {
    "url": "/_nuxt/da5224806914f8e24e66.js",
    "revision": "7e112b220fa077a35334e0364e2ff619"
  },
  {
    "url": "/_nuxt/dabf554a2c802e2fa4b9.css",
    "revision": "a43e2a6ab16f3f1c52257226776c501e"
  }
], {
  "cacheId": "todo-pwa",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
