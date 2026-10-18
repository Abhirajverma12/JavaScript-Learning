// Mapping .
const arr2 = [10,20,30,40];
const newArr2 = arr2.map((num)=>num*3);
console.log(newArr2);

const products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Mouse", price: 1000, category: "Electronics" },
    { name: "Keyboard", price: 2000, category: "Electronics" },
    { name: "T-Shirt", price: 800, category: "Clothing" },
    { name: "Shoes", price: 2500, category: "Clothing" }
];

// we want values price more than the 1000
const newProd  = products.filter((product)=>product.price >1000);
console.log(newProd);

// we want values price more than 1000 and sort the values in ascending order
const newProd1  = products.filter((product)=>product.price >1000).sort((a,b)=>  a.price-b.price);
console.log(newProd1);


// we implement map like for all elements we only want the some values of each element
const ans = products.map((product)=>({name:product.name , price: product.price}));
console.log(ans);


// we only  want name & price of  values price more than 1000 and sort the values in ascending order

const anss = products.map((product)=> ({name:product.name , price: product.price})).filter((product)=>product.price >1000).sort((a,b)=>  a.price-b.price);
console.log(anss);

// now i create a custom map function to use with array  arr2   only
arr2.mapping = function(mapper){
    const ans =[];
    for( let num of this ){
        ans.push(mapper(num));
    }
    return ans;
}

const newarr2 = arr2.mapping((num)=> num*num);
console.log(newarr2);


// // this is General Prototype of the method to use with any array generally we donot prefer this method to create a common method which accesed by everyone
// bcz by this prototype method we have done same changement in the property of the original array so we will basically avoid to use this method
Array.prototype.mapping = function(mapper){
    const ans =[];
    for( let num of this ){
        ans.push(mapper(num));
    }
    return ans;
}
const newarr3 = arr2.mapping((num)=> num*2);
console.log(newarr3);

const newarr4 = newarr3.mapping((num)=> num*2);
console.log(newarr4);