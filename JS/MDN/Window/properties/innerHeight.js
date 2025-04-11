
console.log(window.innerHeight); // or

console.log(self.innerHeight);
// will log the height of the frame viewport within the frameset

console.log(parent.innerHeight);
// will log the height of the viewport of the closest frameset

console.log(top.innerHeight);
// will log the height of the viewport of the outermost frameset
