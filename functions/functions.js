// functions............

function greeting(){
    console.log("Helle dear ");
    return 10;
}
console.log(greeting());

// functions are reusable block of code .....
function addnumber(num1,num2,num3=0,num4=0){ // if we need sum of only 2 or 3 parameters so the 3 or 4 th parameters are assign to 0
    const sum = num1+num2+num3+num4;
    console.log(sum);
}
addnumber(3,5);
addnumber(3,5,9);
addnumber(3,5,5,9);

//  rest operator : it is used to catch many individual values .......................................................................
function addnumbers(...num){
    // console.log(num); // in rest the number of input parameters are converted into the array formate

    let sum =0;
    for(let n of num){
        sum += n;
    }
    console.log(sum);
}

// function : expression
const addNumber = function(num1,num2){
    return num1+num2;
}
console.log(addNumber(3,2));

// arrow functions ...........................................................................
const Arrowfunction = ()=>{
    console.log("hello this is arrow function");
}
Arrowfunction();

const ADD = (num1 , num2)=>{ // passing vlues in parameters in arrow functions....
    return num1 + num2;
}
console.log(ADD(23,24));

// if you want to just return something in our arrow function so no return ,  no {}
const ADD1 =(num1,num2) => num1+num2;

// // sorting in array by help of the arrow functions ..
// let arr = [10,11,12,9,6];
// arr.sort((a,b)=>a-b); // to sort in ascending order..
// console.log(arr);
// arr.sort((a,b)=>b-a); // to sort in descending order..
// console.log(arr);

// arrow function for single parameters functions
// const sqaureNumber = (num)=> num*num; // this function will return num*num

// if you have single parameter no need of this -- ()
const sqaureNumber = num => num*num;
// const sqaureNumber = num => (num*num);

console.log(sqaureNumber(8));

// to handle object inside the function

// const tempgreeting = () => { // valid
//     let user = {
//         name :"Rohit",
//         age :20
//     }
//     return user ;
// }

// const tempgreeting = ()=>{ // valid
//     return{
//         name:"Rohit",
//         age :20
//     }
// }

// to handle the objects in arrow function in one line...

// const greets = ()=> ({name:"Rohit" , age:20});
// console.log(greets());

// IIFE : Immediately invoke function

// (function greter(){
//     console.log("hello");
// })();

// (()=>{
//     console.log("hii");
// })();

//
// call back function.....

function greet(){
    console.log("i am going to meet someone");
}
function dance(){
    console.log("I am dancing");
}
function meet(callback){
    console.log("Hello ji , kaise ho ap");
    // dance() : hardcode ho jayega ese toh 
    // greet()
    // we have to make our function block of code reusable ...
    callback();
    console.log("I have finished meeting");
}

meet(greet);
meet(dance); // by help of the callback function we have to make our code reusable code ..

// real world usecase for the call back functions...
function blinkitOrderPlced(){
    console.log("In Blinkit , we have started preparing your order");
}
function zomatoOrderPlced(){
    console.log("In zomato , we have started preparing your order");
}
function payment(amount, callback ){
    console.log(`${amount} payment has intialized`);
    console.log("payment recieved");
    callback();
}
payment(500,zomatoOrderPlced);
payment(200,blinkitOrderPlced);













