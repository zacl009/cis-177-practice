/**
 * TODO: Use a 'while' to log the numbers from 1 to 100.
 * However, only log the odd numbers.
 * HINT: Use an 'if' inside the wihle and use:
 * i % 2 === 1 to determine if its odd.
 */

let i = 0;

while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i += 1;
}
