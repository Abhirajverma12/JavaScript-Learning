let person={
    greet: function(){
        console.log("Hello");
    }
};
let student = Object.create(person); // student object is created from person object
student.greet(); // Hello

