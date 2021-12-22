"use strict";
//this
console.log(this); //window obj

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};
calcAge(1989);

//arrow function
const calcAge = (birthYear) => {
  console.log(2030 - birthYear);
  console.log(this); //window: because arrow use parent scope, global scope
};
calcAge(1989);

//function expression
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2029 - this.year);
  },
};
jonas.calcAge();

//method borowing
//this keyword points to the object that is calling the method
const matilda = {
  year: 2011,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); //
