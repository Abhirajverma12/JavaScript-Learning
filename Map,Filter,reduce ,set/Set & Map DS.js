// Set : data structure

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,1,9,5];
console.log(arr);

const s1 = new Set(arr);
s1.add(11);
console.log(s1);
console.log(s1.has(5));

for(let num of s1){
    console.log(num);
}

const emails =  ["ro@gm","ra@gm","ro@gm","rn@gm","ra@gm"];
const s2 = new Set(emails);
console.log(s2);

// to get the array contains unique elements we can use spread operator [...new Set(arrayname)]
const uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);



// Map : data structure

const m1 = new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,"Ram"],
    [[10,20,30,40],"Rohit"]
]);
console.log(m1);

console.log(m1.has(2));
console.log(m1.get("Rohit"));
console.log(m1.size);

for(let [key,value] of m1){
    console.log(key,value);
}
m1.delete(2); // delete the key value pair from map
console.log(m1);

// m1.clear(); // clear the map

