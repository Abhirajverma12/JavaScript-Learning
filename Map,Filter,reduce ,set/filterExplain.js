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
// bcz by this prototype method we have done same changement in the property of the original array so we will basically avoid to use this method
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


