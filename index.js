/**
 * TODO: Sum the numbers from 1 to 10.
 */

let x = 0;
let total = 0;

while (x <= 10) {
  total += x; // total = total + x;
  x += 1;
}

console.log(total);

// Fizz Buzz
// Log the numbers from 1 to 100.
// However, if the number is divisible by 3, log 'Fizz!'
// If the number is divisible by 5, log 'Buzz!'
// If the number is divisible by 3 and 5, log 'FizzBuzz!'
// Each number should only result in 1 log.

let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz!");
  } else if (i % 3 === 0) {
    console.log("Fizz!");
  } else if (i % 5 === 0) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
  i += 1;
}
