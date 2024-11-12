importScripts('/assets/uv/uv.bundle.js');
importScripts('/assets/uv/uv.config.js');
importScripts('/assets/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
