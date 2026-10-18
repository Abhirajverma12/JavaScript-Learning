// Non Primitive Data Type 
// array ,object,function

let arr = [10 ,20,30,"Rohit","Abhiraj"];
console.log(typeof arr);





// define an object in  js 
let user = {
    name :"Abhi" ,
    account:32443 ,
    age : 18
}
console.log(typeof user);


// define an  function

function Add2num(){
    console.log("hello");
}
Add2num();
console.log(typeof Add2num);


// primitive data type  -- immutable

let str ="Rohit";
console.log(str);

// proof i.e., Primitive data type is Immutable datatype ..

str[0] = 'M'; // now at that point it give error because str is point to memory loaction & we try to perform the changement at that memory location but it is not allowed due to the immutability of the Primitive datatype  
console.log(str[0]);  // it will still print "R" bcz changement not happened 
// when store the new value to the str it will store it to new memory location and then point the str to that memory location
str = "mohan";
console.log(str);

let a=10;
let b= a;
b=20;
console.log(a,b);

// Non primitive data type is -- mutable
let arr2 = [10,12,23,22,32];
arr2.push(90);
arr[0]=70;
console.log(arr2[0]);


let obj = {
    name:"ram" ,
    age : 90
}
obj.name  = "rohan";
console.log(obj);

let obj2 = obj ;
// we create the new object obj2 and store the value of obj in it so gave the referenece of that memory loaction where it stores the obj
obj.name = "Rahul"; //now if change the name in obj2 so it also change it from the obj bcz obj2 has the refrerence of the memory loaction where it stores 

console.log(obj);

// in primitive data type if we copy the one variable value to another so it copy the value 
// but in non primitive data type when we copy the one variable value to another so it gave refrence means it stores the address

// object copies the references 

