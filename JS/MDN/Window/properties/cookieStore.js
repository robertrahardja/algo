// Get all cookies
window.cookieStore.getAll().then(cookies => console.table(cookies));

// Get a specific cookie
window.cookieStore.get("cookieName").then(cookie => console.log(cookie));

// Set a cookie
window.cookieStore.set({
  name: "cookieName",
  value: "cookieValue",
  expires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
}).then(() => console.log("Cookie set successfully"));

// Delete a cookie
window.cookieStore.delete("cookieName").then(() => console.log("Cookie deleted"));

// Listen for cookie changes
const observer = new CookieChangeEvent(
  changes => console.log(changes)
);
window.cookieStore.addEventListener("change", observer);
