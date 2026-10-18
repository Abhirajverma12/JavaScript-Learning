// Hoisting : Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are actually declared in the code.

// CODE RUN --> Execution Context
//  1. Memory Allocation Phase
//  2. Code Execution Phase

// firstly in memory allocation phase  , variable are sotre & assign undefined value and function are store in memory with their code.
// secondly in code execution phase , variable are assigned with their value and function are executed when they are called.

// variables & function are excuted in order & store in stack memory and it value are stored in heap memory.
// the function calls at the stack are stored or put in the heap memory 

// Memory allocation phase :
// 1. var a = undefined
// 2. var b = undefined
// 3. function addnumbers(num1,num2) { ... }  = function code is stored in memory

// Code Execution Phase :
// 1. a = 10
// 2. b = 20
// 3. function addnumbers(num1,num2) { ... }  = function code is executed when it is called
var a = 10;
var b = 20 ;
function addnumbers(num1,num2){
    let sum = num1 + num2;
    console.log(sum);
}

var sumresult1 = addnumbers(a,b);
var sumresult2 = addnumbers(4,5);

// here we can call function "add" before is intialization because it is hoisted in memory allocation phase and we can call it before its initialization but we can not call the function "addnumbers" before its initialization because it is not hoisted in memory allocation phase and we can only call it after its initialization.
var sumexample = add(10,20);

function add(num1,num2){
    sum = num1 + num2;
    console.log(sum);
}

// Let & Const are not hoisted like var. They are in a "temporal dead zone" from the start of the block until the declaration is processed. This means that if you try to access them before their declaration, you'll get a ReferenceError.

//Memory allocation
// a = <uninitialized> (initialized in the temporal dead zone ) -- after the memory allocation it is not accessible until the somevalue is not assigned to it
// b = <uninitialized> (initialized in the temporal dead zone )
// if we acess it earlier than the memory allocation phase & excuction phase then it will give us reference error because the value is not stored in memory yet.
// console.log(a);
// console.log(b);

//Execution phase
// a = 10
// b = 20
// now we can access the value of a & b after the memory allocation phase & excution phase

let a2 = 10;
const b2 = 20;

console.log(a2);
console.log(b2);

const addNumbers = (num1,num2) => {
    let sum = num1 +num2 ;
    return sum ;
}

const adresult = addNumbers(10 ,30);
console.log(adresult);


// hosting  is javascript's behavior of knowing about a variable or function's execution before executing code. How it treats  that knowledge depends on  keyword (function ,var , let ,or const) used to declare the variable or function.

// hosting is when javascript moves your variable and function declaration to the top of their scope before execution .
