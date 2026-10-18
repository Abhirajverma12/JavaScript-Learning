const arr = [10,20,30,40,50];
const arr2 = ["Rohit",11,true];
const arr4 = ["Man",21 ,32,36];

// arr.push(arr2); // [ 10, 20, 30, 40, 50, [ 'Rohit', 11, true ] ]
// console.log(arr);

const arr3 = arr.concat(arr2); // in concat operation it will give the new array formate
console.log(arr3); 


// const arr5 = [arr,arr2 ,arr4]; // [[ 10, 20, 30, 40, 50 ],[ 'Rohit', 11, true ],[ 'Man', 21, 32, 36 ]]   // here we concate arr , arr2 ,arr4  in arr5

const arr5 = arr.concat(arr2,arr4); // here we concate arr , arr2 ,arr4  in arr5
console.log(arr5);


// spread operator

const arr6 = [...arr,...arr2,...arr4] ;// here we concate arr , arr2 ,arr4  in arr5

// array to string
const names = [ "Alice","Bob","Rohit","Charlie","Mohit","Bob","alice"];

console.log(names.toString());  //Alice,Bob,Charlie
console.log( typeof names.toString()); // string
// print arr in str form but have in btw -- space , comma , _  , etc...
console.log(names.join(" ")); //Alice Bob Charlie

console.log(names.indexOf("Bob")); // 1
console.log(names.lastIndexOf("Bob")); // 3
console.log(names.includes("Bob")) ; // yes
console.log(names.includes("Bobs")); // no bcz of Bobs are not present in our names arr or string 

// sorting in names arr
names.sort();
console.log(names);

names.reverse(); // reverse the sorted array 
console.log(names);

// it will sort on the basis of ascii in js sort of numbers in arr is noton basis of the numbers , it's on basis of the ascii valuee..
// bcz in js the array store the multiple data types value so it sort on basis  of the ascii value \
const a = [101,90,80,32,91];
a.sort();
console.log(a);

const arr7 = [10,20,86,30,"Rohit",2, true];
arr7.sort();
console.log(arr7);

// sorting

const arr8 = [10,60,20,96,35,32,25];
//ascending order
// a=10
// b=40
//  - ve : phele a ayega fr b aeyega
//  +ve : phele b ayega  fr a aeyegaa

arr8.sort((a,b) => a-b);
console.log(arr8);

arr8.sort((a,b) =>  b-a);
console.log(arr8);


// acess elements in 2d  or in 3d array ..
const arr9 = [10,20,[20,30,[50,60],70],80];

console.log(arr9[2]);
console.log(arr9[2][1]);

const arr9_c = arr9.flat(); // flat it till level 1
console.log(arr9_c);
const arr9_c2 = arr9.flat(2); // flat it till level 2
console.log(arr9_c2);

// why array is not array in javascript 
