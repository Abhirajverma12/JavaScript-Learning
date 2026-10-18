    // In this expression: 5 + 10
// -> `+` is the operator.
// -> `5` and `10` are the operands.
// -> The entire expression `5 + 10` evaluates to the value `15`.
let result = 5 + 10;


// Compound Assignment Operators ..................
// Operator	Example	Equivalent To
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// Airthmetic operator
console.log(10 % 3); // 1 (10 divided by 3 is 3, with a remainder of 1)
console.log(10 % 2); // 0 (An even number always has a remainder of 0 when divided by 2)

// increment and decrement 
let postfix = 5;
let prefix = 5;

console.log(postfix++); // Prints 5. `postfix` is now 6.
console.log(postfix);   // Prints 6.

console.log(++prefix); // Prints 6. `prefix` is now 6.
console.log(prefix);   // Prints 6.


// comparison operator 
console.log(7 == "7");   // true (string "7" is coerced to number 7)
console.log(0 == false); // true (boolean false is coerced to number 0)
console.log(0 === false); // false (number is not a boolean)

// === (Strict Equality): Compares two values for equality without performing type coercion.
// It checks if both the value AND the type are identical. ALWAYS PREFER THIS OPERATOR. code JavaScript
console.log(7 === "7");   // false (number is not a string)
console.log(0 === false); // false (number is not a boolean)

// != (Loose Inequality) & !== (Strict Inequality): The same rules apply. Always prefer !==.

// Logical operators


// string to number
// let z = "10";
// let  zz = Number(z);
// console.log(typeof zz);
//  when we compare the string and number (string convert into the number )
// console.log(z == zz);// true
// console.log(z === zz); // false (=== first of all check the type of both and than perform the comparison between two)

// let z = "10ac";
// let  zz = Number(z);

// console.log(zz); // here it gives the NAN - not a number 

// console.log(0/0); // here it also gives NAN

// let a =10 ;
// let b = String(a);
// console.log(b);

// console.log(Number(true)); 
// console.log(Number(false));

// console.log(Number(null)); // it gives 0
// console.log(Number(undefined)); // it gives NAN

// console.log(Boolean(-10)); // true
// console.log(Boolean(0)); // false 


let a = 0.1; 
let b = 0.2; 
let c = a + b;
console.log(c);

//  null is loosely equal to undefined 
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0 ); // false
// console.log(null == true); // false
// console.log(null == false); // false

//  > ,< , >= ,<=  (null -->number ,undefined -->NAN  )
console.log(null >= 0);
console.log(null >= 0);
console.log(null >= undefined);
console.log(undefined >= 0);

console.log("Rohit" > "Mohit"); // true

// EK koi bhi type hain , usko agar muje compare krna hain dusre kisi type se 
// dono number mein convert honge

console.log(null > ""); /// both null and "" is convert into the number 0 
console.log(null >= ""); // it gives true
