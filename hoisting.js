"use strict";

//variable environment, scope chain, this keyword
console.log(me);
console.log(job);
console.log(year);

var me = "Alina";
let job = "Programmer";
const year = 2021;

//functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 4));
console.log(addArrow(3, 4));

//fnct declaration- we can call before we declare it
function addDecl(a, b) {
  return a + b;
}
//function expression
const addExpr = function (a, b) {
  return a + b;
};
//arrow function
const addArrow = (a, b) => a + b;

//detele shopping cart

//Best practice:
//-undefined, use const for variable
//-declare variables at top of code
//-use variables after declaration

if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products detelted!");
}
//window in console: let and const don't appear in window
var x = 1; //only var in global window object
let y = 2;
const z = 3;
