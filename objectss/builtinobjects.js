let num = [1,2,3,4,5,6,7,8,9,10];// it is an object not an array
console.log(num.length); // it will give the error because object does not have length property

console.log(Math.max(10,23,32));

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

