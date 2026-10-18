// reduce

const products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Mouse", price: 1000, category: "Electronics" },
    { name: "Keyboard", price: 2000, category: "Electronics" },
    { name: "T-Shirt", price: 800, category: "Clothing" },
    { name: "Shoes", price: 2500, category: "Clothing" }
];

// accumulator = sum =0 (intially)
const totalPrice =products.reduce((accumulator, currentValue)=>{
    if(currentValue.price >1000){
        return accumulator + currentValue.price ;
    }
    return accumulator ;
},0);


// in this accumulator we calculate only the sum of the price > 1000 and return the sum of the price > 1000
const totalPrice2 =products.reduce((accumulator, currentValue)=>{
    if(currentValue.price >1000){
        return accumulator + currentValue.price ;
    }
    return accumulator ;
},0);

console.log(totalPrice); // output --> 66300
console.log(totalPrice2); // output -->64500
