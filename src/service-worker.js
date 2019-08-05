//Precarga de la app

self.__precacheManifest = [].concat(self.__precacheManifest || [])
//workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

//App Shell
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html")
  );

  // El resto utiliza Network First
workbox.routing.registerRoute(/^https?.*/,
    new workbox.strategies.NetworkFirst(), 'GET')