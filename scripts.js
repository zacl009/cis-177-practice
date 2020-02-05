// undefined is a PRIMITIVE TYPE.
// It signifies the absence of ANY value;
let x;

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
console.log(me.pet.cat); // ! undefined.cat

// Global variables vs. Object keys
const x = 23;
const name = "fake";

const me = {
  name: "oweinois"
};

// Reference the GLOBAL VARIABLE
console.log(name);

// Reference the key 'name; inside of the OBJECT me.
console.log(me.name);
