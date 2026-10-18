// NUmber 
let a =10;
let b = 345.6585;
console.log(b.toFixed(1)); // after decimal it will take only upto 1 digit 

console.log(typeof b.toFixed(1)); // it will give type string 

// NaN (Not a Number): Represents the result of an invalid or undefined mathematical operation. It's the error code for failed math.Key Property of NaN: It is the only value in JavaScript that is not equal to itself.
console.log("hello" / 2);    // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(typeof NaN);     // "number"

console.log(NaN  == NaN);
console.log(NaN === NaN);

//  "Gotcha": Floating-Point Inaccuracy
console.log(0.1 + 0.2); // Outputs: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Special Numeric Values
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log(typeof Infinity); // "number"



isNaN("blue");       // true (coerces "blue" to NaN)
Number.isNaN("blue"); // false (it's a string, not NaN)

let result = 0 / 0; // result is NaN
isNaN(result);       // true
Number.isNaN(result); // true

//  num to base 10,16,2
let num = 255;
console.log(num.toString());    // "255" (base 10 - default)
console.log(num.toString(16));  // "ff"  (base 16 - hexadecimal)
console.log(num.toString(2));   // "11111111" (base 2 - binary)

//  .toFixed(digits)  Formats a number to a fixed number of decimal places and returns a string. Useful for formatting currency.
let price = 19.991234;
console.log(price.toFixed(2)); // "19.99"



let n = 123.456;
console.log(n.toPrecision(4)); // "123.5" (4 significant digits)


// other Math. functions ..... 
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2));  // 5

console.log(Math.max(10, -5, 100, 0)); // 100

// To get a random integer between 1 and 10 (inclusive):
let randomInt = Math.floor(Math.random() * 10) + 1;

console.log(Math.random());
// [0,1) :it will generate value between 0 and 1 , where 0 include but 1 is not included


// satebaji ka ek game banate hain :(0-9)
console.log(Math.floor(Math.random()*10));

// random numbers between 1 - 10
console.log(Math.floor(Math.random()*10)+1);
 