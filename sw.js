const cacheName = 'magic-calc-v15';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'Calc-512.jpg',
  'Calc-192.jpg'
];

// Install the service worker and cache everything
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
