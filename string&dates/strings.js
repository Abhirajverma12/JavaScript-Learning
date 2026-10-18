// string
const str1 = "Rohit";
const str2 = "Abhiraj ";
const str3 = "ROHIT IS A GOOD BOY";
const strTemp = 

console.log(str1, str2,str3);

const str4 = `strike is
coming soon..
`;

let day = 17;

const str5 = `strike is coming on ${day}`;
console.log(str5);

// upper and lower case conversion
// const a = str1.toUpperCase();
// const b = str2.toLowerCase();



// finding of substring idex if present in the given string

const str6 = `Hello Coder Army Coder`;

console.log(str6.indexOf('Cor')); // false bcz Cor is not present as the substring

console.log(str6.indexOf('Cod')); // true bca Cod is present as substr in the given string

console.log(str6.indexOf('Cod')); 
console.log(str6.lastIndexOf('Cod'));
console.log(str6.includes('Cod')); // return true if the Cod is present in our string

// slice
console.log(str1.slice(2,7));
console.log(str1.slice(3)); // from index 3 to complete string 

console.log(str6.slice(-4)); // take 4 chars from back  
console.log(str6.slice(-4,-2));

// substrings
console.log(str1.substring(2,5));


// differnce btw slice and substring
// in slice - you can mark the negative index
// in substring - you can not mark the negative index

const a = "Abhiraj";
const b = "Verma";
const c = a + " " + b;
console.log(c);

// replace some charcters from it

const str7 =`Hello Coder Army Coder`;

console.log(str7.replace("ode" , 'iam'));
console.log(str7.replaceAll("ode" , 'iam'));


//  trim : removes the white space from both 
const user = "Rohit  Negi   ";
console.log(user.trim());
console.log(user.trimStart());
console.log(user.trimEnd());

// .split(separator): 
// Splits a string into an array of substrings, using the separator to decide where to split. This is incredibly useful.

const names = "Rohit,Mohit ,Mohan";
let items = names.split(","); //["Rohit","Mohit","Mohan"]

const names2 = "the quick brown fox";
let word_array = names2.split(" ");  // ["The", "quick", "brown", "fox"]

let letters = "abc";
let letter_array = letters.split(""); // ["a", "b", "c"]


// The New Way (Template Literals): for concatenations

let name = "Alice";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
// You can even put expressions inside:
let futureMessage = `Next year, I will be ${age + 1}.`;

//  Multi line strings

// old way 
let htmlOld = '<div>\\n' +
              '  <p>Hello</p>\\n' +
              '</div>';

// new way.....

let htmlNew = `
  <div>
    <p>Hello</p>
  </div>
`;


