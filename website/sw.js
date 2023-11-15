self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('storage').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/picture.webp',
      '/picture.jpg',
      '/certification.webp',
      '/certification.png',
      '/visitenkarte.vcf',
      '/apple-touch-icon.png',
      '/apple-touch-icon-76x76.png',
      '/apple-touch-icon-120x120.png',
      '/apple-touch-icon-152x152.png',
      '/apple-touch-icon-180x180.png',
      '/android-chrome-192x192.png',
      '/android-chrome-512x512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
