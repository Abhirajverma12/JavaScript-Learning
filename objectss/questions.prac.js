// Define an object book with properties title ,author ,and year and a method getSummary that returns a summary of the book 
// create a person object using both the object internal amd the new object() syntax .Add properties name and age .
// write a script that uses the Math object to generate a randome number between 1 and 100 and format itt to two decimal places.
// write a function tha alerts the user with their agents adn 

let book ={
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    year : 1925,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// internal object syntax
let person1 = {
    name: "John",
    age: 30
}
console.log(person1);

// new object() syntax
let person2 = new Object();
person2.name = "jane";
person2.age = 25;
console.log(person2);

let person3 = new Object();
console.log(person3); // it will give the empty object because we have not added any properties to the object person3