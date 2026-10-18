//What is a Closure in js ?
// Closure == a function that remembers variables from its outer scope even after the outer function has finished executing .


function createcounter(){
    let count =0;
    function increase(){
        count++;
        return count ;
    }
    return increase;
}
const cnt = createcounter(); // createcounter() will return the reference to function increase and assign it to cnt variable
cnt(); // it will simply the function and and simply execute and increasse the count variable by 1 
console.log("hello");
console.log(cnt); // output --> [Function: increase]  // when excute or call than it increase the value of the count variable by 1
console.log(cnt()); // output --> 2
console.log(cnt()); // output --> 3
console.log(cnt()); // output --> 4



function createBankAccount(){

    // let balance = 500 ; //. if we use this so we donot acess the variable using "this." 
        const user = {
        balance : 500 , // this is public variable bcz it is accessible outside the function createBankAccount
        deposit:function(amount){
            if(typeof amount === "number" && amount >0){
            this.balance += amount ;
            return this.balance ;
            }
        },
        withdraw : function(amount){
            if(typeof amount === "number" && amount >0 && amount <= this.balance){
                this.balance -= amount ;
                return this.balance ;
            }
        },
        getBalance : function(){
            return this.balance ;
        }
    }
    return user ;

}



// console.log(user.deposit(100)); // output --> 600

// console.log(user.withdraw(200)); // output --> 400

// console.log(user.getBalance()); // output --> 400

const customer = createBankAccount(); // createBankAccount() will return the reference to object user and assign it to customer variable
console.log("hello");
console.log(customer.deposit(100)); // output --> 600

console.log(customer.withdraw(200)); // output --> 400

console.log(customer.getBalance()); // output --> 400



// high order function

function double(value){
    function execute(num){
        console.log("I am execute function");
        num= num +value;
        return num ;
    }
    return execute ;
}
const n = double(5);
n(10); // output --> I am execute function
console.log(n(10)); // output --> 15

function double2(value){
    return function proceed(num){
        return num * value;
    }
}
const n2 = double2(5);
console.log(n2(10)); // output --> 50

const n3 = double2(10)(20); // output --> 200
console.log(n3);