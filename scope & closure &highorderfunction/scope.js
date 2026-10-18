// Scope and Closure , high order function(HOF) in JavaScript
// Global scope, local scope, block scope

//Global -> accessible to everyone
// Functional -> accessible only inside the function
// Block Level scope -> accessible only inside the block 

// let , const -> follow all 3 scopes
// var -> follow only global and functional scope it should not be follow the block scope
// in var if we create it inside the block it will be accessible outside the block also


let a = 10; // global scope variable
const b = 20; // global scope constant

if(true){
    console.log(a); // 10
    let d =5; // block scope variable  // this is only accessible inside this block
    console.log(d); // 5

    var vr = 100; // it is also accessible outside the block
    console.log(vr);
}

console.log(vr);  // 100

function greet(){
    console.log(a); // 10
    console.log(b); // 20

    let c = 30; // local scope variable  // this is only accessible inside this function
    console.log(c); // 30

    var d = 150 ; // here var is only accessible inside this function not outside the function
    console.log(d);
}

// console.log(d); // ReferenceError: d is not defined

greet();

let global =30 ;

function greet1(){
    let global = 40; // local scope variable
    console.log(global); // 40
    function meet(){
        let global = 50; // local scope variable
        console.log(global); // 50
    }
    meet();
}

greet1();


function createCounter(){

    function increment(){
        console.log("I am increment function ");
    }
    // increment();
    return increment ;
}

const count = createCounter(); // createCounter() will return the reference to function increment and assign it to count variable

console.log(count); //output -->  [Function: increment].  (bcz it return the function increment )
count(); // output --> I am increment function  (bcz we are calling the function increment using count variable)

function createtest(){
    let count =0;
    function increase(){
        count++;
        return count ;
    }
    return increase;
}
const cnt = createtest(); // createtest() will return the reference to function increase and assign it to cnt variable
console.log(cnt); // output --> [Function: increase]
console.log(cnt()); // output --> 1
console.log(cnt()); // output --> 2
console.log(cnt()); // output --> 3
