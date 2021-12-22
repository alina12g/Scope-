"use strict";

var firstName = "Matilda"; //don't use var!

const jonas = {
  firstName: "Jonas",
  year: 1991,
  //regular method
  calcAge: function () {
    // console.log(this);
    console.log(2029 - this.year);

    //SOLUTION 1
    // const self = this; //preserve this keyword, self or that
    // //regular function,  this is undefined
    // //solution is to use an extra variable called self outside function

    // const isMillenial = function () {
    //   //console(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1991 && self.year <= 1996);
    // };
    //isMillenial();
    //},

    //SOLUTION 2
    //arrow function use this from parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //never use arrow function as method,
  //use normal function expression
  greet: () => {
    console.log(this), //arrow function
      //undefined: parent is global scope, window obj, an obj literal
      console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//function get arguments keywords: this only in regular function
//f expression
//arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 1);
addExpression(2, 6, 9);
var addArrows = (a, b) => {
  return a + b;
};
addArrows(2, 3, 4);
