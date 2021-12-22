"use strict";

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: "Alina",
  age: 30,
};
const friend = me;
friend.age = 33;

console.log("Friend", friend);
console.log("Me", me); //will be age 33

//Primitive types are called in call stack

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage ", marriedJessica);

//Copying objects with object.assign
//merge 2 obj and return a new one
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

//Object.assign works except if we have an obj inside another obj

const jessicaCopy = Object.assign({}, jessica2); //will be a new obj
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage ", jessicaCopy);
