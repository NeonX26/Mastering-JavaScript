// Arrow Functions

// If there is only one parameter, no need of the parentheses:
const sqr = x => x * x;
console.log(sqr(5));  //25

// If the function body contains only one expression,
//  you can omit the curly braces and the return keyword:
const add = (x,y) => x + y;
console.log(add(1,8)); // 9


let arr = [1,2,3,4,5]
const nums = (...args) => {
    for(let i = 0; i<=arr.length; i++) console.log(arr[i]);
}
nums();