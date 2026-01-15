self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("maktab28").then(cache=>{
      return cache.addAll([
        "index.html",
        "admin.html",
        "style.css"
      ]);
    })
  );
});
