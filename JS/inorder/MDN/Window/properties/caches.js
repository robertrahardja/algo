// put in chrome client


// Create a response to cache
const responseData = "This is cached data for /list";
const responseToCache = new Response(responseData, {
  headers: { 'Content-Type': 'text/plain' }
});

// Open the cache and store the response
caches.open("v1").then(cache => {
  return cache.put("/list", responseToCache);
}).then(() => {
  console.log("Data successfully added to cache");
});
