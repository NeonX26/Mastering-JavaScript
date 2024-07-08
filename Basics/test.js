console.log("Creating an objects")


let Iron = {
    name:"Iron Man",
    age: 45,
    powers: ["Flight", "Super Strength", "Intelligence", "Inventor"], //Array inside a object

    city : {                // object inside an object
        name: "New York",
        state: "New York",
    }
}
console.log(Iron.name); //Iron man
console.log(Iron['age']);  //45
console.log(Iron.powers[2]);  //Intelligence
console.log(Iron.city.name);  //New York

Iron.Al = 'Jarvis'  // adding elements in object
console.log(Iron.Al);  //Jarvis

delete Iron.age;  //delete the elements from the object
console.log(Iron);