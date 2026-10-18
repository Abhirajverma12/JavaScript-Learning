// forEach  , filter , reduce  , map , set

const arr = [10,20,30,40,50,60,70,80,90,100];

let sum =0;

arr.forEach((number)=>{
    console.log(number); // only print number
})

arr.forEach((number,index)=>{
    sum += number ;
    console.log(number); // only print number
    console.log(number,index); // number and its index
    console.log(number,index , arr);  // number and its index and whole array
})
console.log(arr);
console.log(sum);

const totalPrice = arr.reduce((accumulator,currenValue) =>{
    return accumulator+currenValue;
},0);

console.log(totalPrice) ;

//
// // Filter...
//

const arr1 = [10,20,30,40,50];

// true : select  , false : not selected
const newArr = arr1.filter((number)=> number >25);
console.log(newArr);

// here we built an custom filtering function
arr.filtering = function(compare){

    const ans =  [];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans ;
}

const newarr = arr.filtering((num) => num>25);
console.log(newarr);

// // this is General Prototype of the method to use with any array generally we donot prefer this method to create a common method which accesed by everyone
// Array.prototype.filtering = function(compare ){
//     const arr = [];
//     for ( let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans ;
// }
// const a = [10,40];
// const answer = a.filtering((num) => num >25);
// console.log(answer);



// Mapping .
const arr2 = [10,20,30,40];
const newArr2 = arr2.map((num)=>num*3);
console.log(newArr2);



// Reduce

