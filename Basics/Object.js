//Object are Declared By Two Way - By literal and By Constructor
//If the Object is created using the constructor it will create singleton object - object.create

//Object Literals

const user = {
    name : "Vishal",
    "full name" : "Vishal Jatti",
    age : "23",
    city : "Jalna",
    isLogedIn : false,
    lastLoginDays : ["Monday","Friday"]
}

//Accese the values in the object
// console.log(user.name);  //Vishal
// console.log(user["age"])  //23
// console.log(user["full name"]);  //Vishal Jatti



//Change the value of object
user.name = "Neon"
// console.log(user.name);


//If don't want to change the values you can lock the object by freezing 
Object.freeze(user) // It will freeze the object 
user.name = "Vishal Jatti" // Value is not changed
// console.log(user.name); //Neon



//combining two object using - Object.assign(target,source)
const obj1 = { 1 : "a", 2: "b"}
const obj2 = { 4 : "c", 3: "d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


//another way is spread {...obj1, ...obj2}
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

//To get the keys and values of an object 
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));


//To check is the property Exit in object or not
// console.log(obj3.hasOwnProperty('3'));  // true




//                                           Object Destructuring

const course = {
    courseName : "JavaScript",
    price : "999",
    duration: "10 Hours"
}

// console.log(course.courseName);  //This is the normal way to access the values of the object 

const {courseName} = course  // This is called the Object destructuring
console.log(courseName);  // No need to use the object name, directly called the property of the object 



// We can change the name of property while object destructuring
const {duration : Time} = course 
console.log(Time); 
