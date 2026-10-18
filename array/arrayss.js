let marks = [ 10,20,30,40,50];

console.log(marks);
console.log(marks.length);

let arr = [10,30,"Rohit",true];
console.log(arr);

console.log(typeof arr); // object
// array is of type object and objects type is Muttable
// Muttable - means changement is possible
arr[1] =90;
console.log(arr);

// push : insert element at end
arr.push(2);
arr.push("strike");

console.log(arr);

// pop operations : delete element from end
arr.pop();
console.log(arr);

// start me add or delete
// unshift : add element at starting
arr.unshift(19);
arr.unshift("Ram");

console.log(arr);

// shift :delete element at last
arr.shift();
console.log(arr);

// we avoid to use the shift or unSHIFT
// beacuse it we want to add or delete an element at begin so it need to shift all the elements so it increases the memory size of it 


console.log("hello");
// printing all the elements of the array individually
let arr1 =[1,2,3,4,5];
for(let i=0 ;i<arr1.length ;i++){
    console.log(arr1[i]);
}

for(let num of arr1){
    console.log(num);
}

let arr2 = arr1;
arr2.push(30); // if perform some changement in arr2 so it also perform changement in arr1
console.log(arr1);

// Object(non primitive ):copy by refrence hote hain
// Primitive : copy by value

const arr3 = [10 ,20,30,40,50,60];
// arr3 = [70,80,90]; //it is not possible bcz here we perform changement in adress of the array

// arr3[2] = 20; // this is possible
console.log(arr3);
console.log(arr3.slice(2,4)); // from  index 2 to 4 take that part of the index

// const arr4 = arr3.slice(2,5); // [30,40,50]
// console.log(arr4);

// splice : to trim out some element from original array

console.log(arr3.splice(1,3)); //  trim out that particular index portion
console.log(arr3); // after triming particular elements
console.log("Hello ");
// arr3.shift();
console.log(arr3);

const arr5 = arr3.splice(0,1,10,"Rohit"); // splice from arr3 betwen indx 0 to 1  store it to "arr5" ...
// after slicing from arr3 than push 10 , Rohit in arr3 from front side 
console.log(arr5);
console.log(arr3);












