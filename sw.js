self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for (const windowClient of windows) {
      if (windowClient.url.startsWith(self.registration.scope) && 'focus' in windowClient) {
        return windowClient.focus();
      }
    }
    if (self.clients.openWindow) return self.clients.openWindow(self.registration.scope);
  })());
});
