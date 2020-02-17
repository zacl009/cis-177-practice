console.log(49 === 49);
// true primitives are compared by value

const a = 49;
const b = 49;

console.log(a === b);

const x = {
  name: "Zac"
};

const y = {
  name: "Zac"
};
//compared by reference
//false because objects are compared by reference
console.log(x === y);

console.log({ a: 42 } === { a: 42 });
