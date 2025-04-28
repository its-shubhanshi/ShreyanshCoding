"use strict";

// variable hositing

console.log(abc);
var abc;

/**
 * five type object create
 *
 *
 */
let objectliteral = {
  name: "hh",
};
let constructorObj = new Object();
constructorObj.name = "Ankita";
console.log(constructorObj);

let objectCreate = Object.create({
  age: 20,
  course: "abc",
});
console.log(objectCreate);

//fourth way object constructor fun

class classObj {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

const person = new classObj("Anamika", "Raghuwanshi");

console.log(person);

//fifth way class function
