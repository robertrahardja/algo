// String operations and methods
const str = 'Hello, World!';

// Basic properties
console.log('Length:', str.length);
console.log('Character at 1:', str.charAt(1));
console.log('Character code at 1:', str.charCodeAt(1));

// String methods
console.log('Uppercase:', str.toUpperCase());
console.log('Lowercase:', str.toLowerCase());
console.log('Substring:', str.substring(0, 5));
console.log('Slice:', str.slice(-6));
console.log('Split:', str.split(', '));

// Searching
console.log('Index of "World":', str.indexOf('World'));
console.log('Includes "Hello":', str.includes('Hello'));
console.log('Starts with "H":', str.startsWith('H'));
console.log('Ends with "!":', str.endsWith('!'));

// Template literals
const name = 'John';
const age = 30;
const template = `${name} is ${age} years old`;
console.log('Template literal:', template);

// String padding
console.log('Padded start:', str.padStart(20, '*'));
console.log('Padded end:', str.padEnd(20, '*'));
