// Service Worker for Kripto-Kurs PWA
const CACHE_NAME = "kripto-kurs-v8";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./references_data.js",
  "./lectures_bundle.js",
  "./glossary_compact.html",
  "./glossary_full.html",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/favicon-32x32.png",
  "./assets/icons/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use catch on individual files so if one fails, install still succeeds
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) => cache.add(url).catch((err) => console.warn("SW cache error for:", url, err)))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // For CDN / external resources (Bootstrap, MathJax, KaTeX, Google Fonts), try cache first or network with cache fallback
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to revalidate if needed
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
          }
        }).catch(() => {/* ignore background fetch errors */});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Cache successful basic responses
        if (networkResponse && networkResponse.status === 200 && (url.origin === location.origin || url.hostname.includes("jsdelivr") || url.hostname.includes("cdnjs"))) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If offline and request is navigation, return cached index.html
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});