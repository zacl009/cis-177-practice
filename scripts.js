// undefined is a PRIMITIVE TYPE.
// It signifies the absence of ANY value;
// let x;

// NULL is a PRIMITIVE.
// NULL represents a deliberate assignment of 'nothing.'
console.log(x);

// This is an OBJECT.
const me = {
  name: "Zac",
  age: 22,
  pets: {
    cat: "Scratch"
  }
};

// Create a new key value pair with age = 23.
me.age = 23;
console.log(me.pets.cat);
// console.log(me.pet.cat); // ! undefined.cat

// Global variables vs. Object keys
// const x = 23;
const name = "fake";

// const me = {
//   name: "oweinois"
// };

// Reference the GLOBAL VARIABLE
console.log(name);

// Reference the key 'name; inside of the OBJECT me.
console.log(me.name);

// BRACKET NOTATION
console.log(me["pets"]);
// Use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE.
const keyThatINeed = "pets";
console.log(me[keyThatINeed]);
console.log(me["keyThatINeed"]); // undefined

// Relational or COMPARISON OPERATORS always yields BOOLEANS.
console.log(1 < 2);

// To check if 2 things are considered to equal...
// '===' is STRICT EQUALITY
//It checks the VALUE AND TYPE.
console.log(2 === "2"); // false
console.log(2 === 3);
console.log(2 !== 3); // true

const x = 3;
// EXPRESSION is anything that evaluates to a value
// STATEMENTS combine EXPRESSIONS with keywords and other syntax
if (x === 3) {
  // {} establish SCOPE OF THE CODE.
  console.log("x is 3!");
} else {
  console.log("x is not 3!");
}

const age = 25;
if (age >= 25) {
  console.log("Renting a car is affordable");
} else if (age >= 18) {
  // If age is between 18 and 25
  console.log("Renting will be expensive!");
} else {
  // All other ages
  console.log("U can't rent a car!");
}

// TODO: Rewrite this example to check if age is less than 18.
// If so, log that, "You can't rent a car!"
