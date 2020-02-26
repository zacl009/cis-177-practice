// Fizz Buzz
// Log the numbers from 1 to 100.
// However, if the number is divisible by 3, log 'Fizz!'
// If the number is divisible by 5, log 'Buzz!'
// If the number is divisible by 3 and 5, log 'FizzBuzz!'
// Each number should only result in 1 log.
for (let i = 1; i <= 100; i += 1) {
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz!");
  } else if (!(i % 3)) {
    console.log("Fizz!");
  } else if (!(i % 5)) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
}
