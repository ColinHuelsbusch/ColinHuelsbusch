self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('storage').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/source-sans-pro-v14-latin-200.woff2',
      '/source-sans-pro-v14-latin-200.woff',
      '/source-sans-pro-v14-latin-regular.woff2',
      '/source-sans-pro-v14-latin-regular.woff',
      '/source-sans-pro-v14-latin-700.woff2',
      '/source-sans-pro-v14-latin-700.woff',
      '/picture.webp',
      '/picture.jpg',
      '/certification.webp',
      '/certification.png',
      '/visitenkarte.vcf',
      '/apple-touch-icon.png',
      '/apple-touch-icon-57x57.png',
      '/apple-touch-icon-72x72.png',
      '/apple-touch-icon-76x76.png',
      '/apple-touch-icon-114x114.png',
      '/apple-touch-icon-120x120.png',
      '/apple-touch-icon-144x144.png',
      '/apple-touch-icon-152x152.png',
      '/apple-touch-icon-180x180.png',
      '/apple-touch-icon-192x192.png',
      '/apple-touch-icon-512x512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
