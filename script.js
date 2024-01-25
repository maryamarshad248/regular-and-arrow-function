'use strict';

// arrow function

// variable declare with var have the property of globl object

//var firstName = 'Maryam';
const Maryam = {
  firstName: 'Maryam',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // solution 1 of the problem (error)
    // const self = this; // self or that

    //const isMellanial = function () {
    //console.log(self.year >= 1981 && self.year <= 1996);
    //};

    // solution 2

    const isMellanial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellanial();
  },

  //arrow function does' nt have its own this keyword that's why it give undefined

  greet: () => console.log(`HY!! ${this.firstName}`),
};

Maryam.greet();
Maryam.calcAge();
// arrow function use this keyword of its parent or global scope and in global
//scope this keyword is a window object

console.log(this.firstName);
// arguments keywords

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 7);
addExpr(3, 7, 9, 8, 12);

// arrow funtion does not have the argument keyword

var addExprNew = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExprNew(5, 6, 7, 8);
