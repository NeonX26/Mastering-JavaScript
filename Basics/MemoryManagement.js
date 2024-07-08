//operations perform in the stack - it give the copy

let myName = "VishalJatti"

let fname = myName;   //giving referece 
console.log(fname);  //VishalJatti

fname = "Vishal"  //changing the value
console.log(fname);  //Vishal
console.log(myName);

//operations perform in the Heap - it gives the reference

let user = {
    name : "Vishal",
    email : "user@gmail.com",
    city : "Jalna"
}