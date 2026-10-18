// objects
// key value

// const { captureOwnerStack } = require("react");

// CRUD Operation : Create read update delete...


// creating an object
const user = {
    name: "Rohit",
    age: 20,
    emailId : "nadm@gmail.com",
    amount:3400,
    //  home address :"dwarka"// this will give error
    "home address" :"dwarka" // so we store in like this formate
}
console.log(user);
console.log(typeof user);



console.log(user.age);// read

// update ..
user.adhar=1245;
console.log(user);
user.age =25;
console.log(user);

delete user.emailId;
console.log(user);

// to acees the objects element
// bcz the elements in the object is store in the form of string like
//  "name" :"abhiraj"
// inside the objects elments are store in that format ]

console.log(user["name"]);


// copy the one user data to another
const user1 = {
    name: "Rohit",
    age: 20,
    emailId : "nadm@gmail.com",
    amount:3400
}
// user2 stores  the refrence of the user1
const user2 = user1;
user2.age = 90;  // if we make change in user2 so it also make changement in user1
console.log(user1);


// important:to acess keys , value of keys , both key and its value
console.log("to acess the object only key , only values of key , both key and value............");
console.log(Object.keys(user)); // to acess key of user object
console.log(Object.values(user)); // to acess value of key of user object
console.log(Object.entries(user)); // to acess key & its value of user object

// looping
// for  in loop
// to acess the keys , its value of the user object
for(let keys in user){
    console.log(keys , user[keys]); // user.keys  :is not allowed
}

// const name = user.name;
// const age = user.age;

// object ko destructuring karna

const {name,age,amount} =user;
console.log(name,age,amount);

const {name:userName,age:userAge} = user; // to acess the name , age by different name :  userName , userAGE
console.log(userName,userAge);

const arr  = [10,20,30,40,80];
const[first,second] = arr;
console.log(first,second);


// for - of loop ......

// acess the keys
// for(let keys of Object.keys(user)){
//     console.log(keys);
// }
const temparr = Object.keys(user); // this & above method to acess the key by help pf  for-of loops .
console.log(temparr);
for(let keys of temparr){
    console.log(keys);
}

// acess the values of keys
for(let values of Object.values(user)){
    console.log(values);
}
// acess the keys & values both
// console.log(Object.entries(user)); //it gives key &value in 2d array format
for(let values of Object.entries(user)){ //it prints in the form of array
    console.log(values);
}


for(let [keys,values] of Object.entries(user)){
    console.log(keys,values);
}
const user3 = {
    name: "Abhiraj",
    age: 20,
    emailId : "nadm@gmail.com",
    amount:3400,
    greeting : function(){
        console.log("something is coming on 18th ..");
        // console.log(`MY name is  ${user3.name}`);

        console.log(`MY name is  ${this.name}`);
        return 20;
    }
}
const va = user3.greeting();
console.log(va);

// why we use this.name instead of user.name
const user4 = {
    name:"Abhi",
    account : 201
}
user4.greeting = user3.greeting;
console.log(user4.greeting());
// \\ when  we intialize the greeting function  from an user3  to user4 so it intialize the greeting inside it in this manner ...

// const user4 = {
//     name:"Abhi",
//     account : 201
//     // greeting : function(){
//     //     console.log("something is coming on 18th ..");
//     //     // console.log(`MY name is  ${user3.name}`);

//     //     console.log(`MY name is  ${this.name}`);
//     //     return 20;
//     // }
// }

// nested objects :
const user5 = {
    name : "abhii",
    age:90,
    amount:900000,
    adress : {
        city:"kanpur",
        state:"uttar pradesh"
    }

}

console.log(user5); // to acess complete nested object
console.log(user5.adress); // to acess object inside any object (or to acess the nested objects)
console.log(user5.adress.city); //  to acess key of object inside any objects


// shallow copy : A shallow copy duplicates only the top-level properties. Nested objects are still shared (same reference).
// // to make independent copy of any object....
const user6 ={...user5};  //  = Object.assign({} , original)
user6.name = "Ram"; // it will handle till level 1 .
user6.adress.city = "Kanauj"; // it could not handle the nested case . it will change in both the user6  as well as user5
console.log(user5);


// deep copy :
//  to make the fully independent copy of any object .. also exact copy
const user7 = structuredClone(user5); // it will make the exact copy
user7.name = "Monu";
user7.adress.city ="Dwarka"; // this will not change in the  real user object by whom we store the deep copy
console.log(user5);

// limitations of the structuredclone  :
//  Functions Cannot Be Cloned , DOM Elements Not Supported,Prototype Is Not Preserved,Cannot Clone Certain Special Objects ,
//  No Support for Property Descriptors ,
// Cannot Clone Functions Inside Objects (Same Issue) , Performance for Large Data,Limited Browser Support (Older Environments)
const user8 = {
    name :"rohit",
    age:999,
    0 : 100,
    2 : " Mohan"
}
// console.log(user8.0); //this is not allowed
console.log(user8[0]);
console.log(user8["0"]);

// when we create the arrays it will store in the form of the object
const arr1 = [10,20,30];

// {
//     0: 10,
//     1:20,
//     2:30
// }

// KEY : String || Symbol..
const sym = Symbol("id");

const user9 = {
    name :"rohit",
    age:999,
    0 : 100,
    2 : " Mohan" ,
    [sym] : "Hello Ji" // sym: "Hello Ji" it is not allowed
}
console.log(user9[sym]);


