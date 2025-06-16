console.log(`Number in JavaScript`);
let a = 5; // Java: int a = 5;
let b = 6;
let c = 23.11; // Java: double b = 3.14;
let d = `5`; // Java: String d = "5";
let e = `5a`;
console.log(`a + b =`, a + b); // 11
console.log(`a + c =`, a + c); // 28.11
console.log(`a - c =`, a - c); // -18.11
console.log(`a + d =`, a + d); // 55

console.log(`a * d =`, a * d); // 55
console.log(`a / d =`, a / d); // 1
console.log(`a * e =`, a * e); // NaN

console.log(`a === d? `, a === d, `, a: `, typeof a, `, d: `, typeof d); // false

let f = Number(d);
console.log(`f: `, f, `, type: `, typeof f);

let g = +d;
console.log(`g: `, g, `, type: `, typeof g);
console.log(`f === g? `, f === g, `, f: `, typeof f, `, g: `, typeof g); // true
