
    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.open('parking').then(function(cache) {
          return cache.match(event.request).then(function(response) {
            var fetchPromise = fetch(event.request).then(function(networkResponse) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })

           return caches.open('v1').then(function(cache)

            return response || fetchPromise;
          })
        })
      );
    });


// self.addEventListener('install', function(event) {
//  e.waitUntil(
//    caches.open('airhorner').then(function(cache) {
//      return cache.addAll([
//        '/',
//        '/index.html',
       
//      ]);
//    })
//  );
// });