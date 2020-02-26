// IMPLICIT CONVERSION
// || means OR
// If first EXPRESSION is 'truthy', then we don't EVALUATE the right hand side.
// 'name' wil lbe a STRING, but it might be blank.

//If 'prompt' RETURNS an empty STRING - b/c of the '||' this will be IMPLICITLY CONVERTED to 'false'
let name = prompt("What is your name?");

// If 'name' is blank, then '!' will convert to a Boolean (NOT FALSE)
// If 'name' is not blank, then '!' will convert to a Boolean (NOT TRUE)
while (!name) {
  // while (name === "")
  name = prompt("What is your name?");
}

console.log(name);
