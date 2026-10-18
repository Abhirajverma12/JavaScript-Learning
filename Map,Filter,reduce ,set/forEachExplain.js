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