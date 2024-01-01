const CACHE_NAME = 'pwa-cache-v1'
const urlsToCache = [
    `/${process.env.NODE_ENV === "production" ? "personal-web/": ""}`,'/index.html','index.css','main.tsx'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)).then(() => self.skipWaiting())
    );
});

self.addEventListener('fetch',event => {
    event.respondWith(caches.match(event.request).then(response => {
        if(response){
            return response;
        }
        return fetch(event.request);
    }));
}); 