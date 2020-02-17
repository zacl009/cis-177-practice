// PASS by VALUE
let x = 3;

// PRIMITIVES CANNOT MUTATE.
// '3' that was used with 'x' previously is completely thrown out and replaced with y
x = 4;
let y = x;

console.log(y);

// PASS BY REFERENCE
const a = {
  name: "Zac"
};

// b will point to the same memory address as a.
// What happens to 1 will affect the other.
const b = a;

a.name = "alkdsjf";

console.log(b.name);
