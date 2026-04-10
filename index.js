// Write your solution in this file!
//Declaring variables in global scope,block scope and function scope

//Global Scope
var globalVariable = "I am a global variable";

function myFunction() {
  //Function Scope
  var functionVariable = "I am a function variable";
  console.log(globalVariable); // Accessing global variable inside the function
  console.log(functionVariable); // Accessing function variable inside the function
  
  if (true) {
    //Block Scope
    let blockVariable = "I am a block variable";
    console.log(blockVariable); // Accessing block variable inside the block
  }
  
  // console.log(blockVariable); // This will cause an error because blockVariable is not accessible outside the block
}
//Declaring a variable.
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";
//Accessing a variable.
console.log(burgers);
console.log(featuredDrink);
//Adding a new item to the burgers array.
const newBurger = "FlatBurger";
burgers.push(newBurger);
console.log(burgers);
//Assigning another newburger to the burgers array.
const anotherNewBurger = "Maple Bacon Burger";
burgers.push(anotherNewBurger);
console.log(burgers);
//Changing the value of featuredDrink.
function changeFeaturedDrink() {
  featuredDrink = "JavaShake";
}
changeFeaturedDrink();
console.log(featuredDrink);

