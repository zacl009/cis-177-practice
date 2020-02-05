// create a variable "timeOfDay" and assign it a string
const timeOfDay = "Evening";

// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
const greeting = `Good ${timeOfDay}!`;

// print "greeting"
console.log(greeting);

// create a new variable, but do not assign it a value
const unassignedValue = "";

// print the variable and its type
console.log(typeof unassignedValue);
// ? what type should we expect?
// String

// assign the variable a value that indicates the variable is purposely blank
const blankValue = "";
// ? what value should we assign?
// ""

// print the variable and its type again
console.log(typeof blankValue);
// ? what type should we expect?
// String

// try to print a variable that does not exist
console.log(ghost);
// ? what should we expect to print in the CLI?
// ReferenceError: ghost is not defined

// print "greeting" again
console.log(greeting);
// ? will this line run?
// no
