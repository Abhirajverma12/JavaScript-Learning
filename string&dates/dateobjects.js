// // Creates a Date object for right now.
// const now = new Date();
// console.log(now); // it prints the current date milliseconds

// console.log(now.toString()); // e.g., Mon Oct 28 2024 03:30:00 GMT+0530 (India Standard Time)
// console.log(now.toLocaleString());

// console.log(now.getDay());//to print day no. of the week
// console.log(now.getDate()); // to print the date day of the month 
// console.log(now.getFullYear()); // to get the current year
// // months starts showing from 0
// console.log(now.getMonth()); //  to get the current month

// days :Mon - tue(1 based)
// month : 0 1 baseed

// year month date hour minute second millisecond
// const now  = new Date(2026,4,2,19,15,30,20);
// console.log(now.toString());

const now  = Date.now();
const dates = new Date(0);


console.log(now.toString);









// Date.now() is a quick way to get the CURRENT timestamp as a number.
const currentTimestamp = Date.now(); // e.g., 1759262295036
console.log(currentTimestamp);

// Now, let's create a Date object from that number.
const da = new Date(1759262295036);
console.log(da); // This will show the date and time corresponding to that timestamp.

