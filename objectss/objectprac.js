let car={
    name:"BMW",
    model:"X5",
    color:"Black",
}

// let car = new Object();
// car.name = "BMW";
// car.model = "X5";
// car.color = "Black";

console.log(car);

//  now create the construction function using object.create() method 

function Car(name,model,color){
    this.name = name;
    this.model = model;
    this.color = color;
}

let car1 = new Car("BMW","X5","Black");
console.log(car1);

let mycar = new Car("Audi","A4","White",2022);
console.log(mycar);
price =0 ;
let mycar2 = new Car("Mercedes","C-Class","White",2023,price=50000);
console.log(mycar2);
console.log(mycar2.price); // 50000 // it will give the UNDEFINED because we have not defined the price in the constructor function but we can add the price to the object mycar2 by using the dot notation
mycar2.price = 60000; // change the price of mycar2
console.log(mycar2.price); // 60000
console.log(mycar2); // it will give the object with the price property because we have added the price property to the object mycar2