console.log(`Methods with String in JavaScript`);

let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
console.log(a, a.length);

let b = "Apple, Banana, Kiwi";
console.log(b.slice(7, 13));
console.log(b.slice(7)); // Count from the start of the string.
console.log(b.slice(-12)); // Count from the start of the string.

let c = `    Hello World!    `;
console.log(c.trim());

console.log(b.split(", ")); // Split the string into an array.
