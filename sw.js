const cacheName = 'magic-calc-v4';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/6511/6511306.png'
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
