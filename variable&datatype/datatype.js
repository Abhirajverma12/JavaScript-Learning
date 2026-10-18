// data type 
// primitive data type  ----  number , string , boolean , undefined ,null , bigint , symbol

// non primitive data type ---- array,object, function 


// number  
let aa = 10;
let bb = 2.334;

console.log(aa,bb);

// string 
let c = "strikee on the way";
let d = 'ramm';
console.log(c ,d);

// BIGINT 

let num = 123456789987654321n;
let num1 = BigInt(123456789987654321);
console.log(num);
console.log(num1); 

// NULL
let weather = null;
console.log(weather);

// NULL    vs     UNDEFINED 

// let climate = current_weather("kanpur");
// 25
// null 
// undefined 


// undefined 
let x ;
console.log(x);


// checking the data type of the variable
let a = null;
let b;

console.log(typeof a);
console.log(typeof b);

// comparing of the null and undefined :
console.log(null == undefined); // it shows true because both are equal in value but not in type
console.log(null === undefined); // it shows false because both are not equal in type
