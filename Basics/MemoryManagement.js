//operations perform in the stack - it give the copy

let myName = "VishalJatti"

let fname = myName;   //giving referece 
console.log(fname);  //VishalJatti

fname = "Vishal"  //changing the value
console.log(fname);  //Vishal
console.log(myName);






//operations perform in the Heap - it gives the reference

let userOne = {
    name : "Vishal",
    email : "user@gmail.com",
    city : "Jalna"
}   // creating the first object

let userTwo = userOne;  //assign the values of userOne to the userTwo (It will give the reference )

console.log(userOne.name);  //value in userOne
console.log(userTwo.name);  //value in userTwo

userTwo.name = "NeonX";   //bcoz in Non-primitive data type if we try to copy the value it give the reference of that value
console.log(userOne.name); //NeonX
console.log(userTwo.name);  //NeonX

