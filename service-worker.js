// 배너현황 껍데기 앱 - 실제 콘텐츠는 항상 사내 서버에서 최신으로 받아오므로 캐싱은 하지 않음
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request));
});
