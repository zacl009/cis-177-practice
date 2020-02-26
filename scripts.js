let age = prompt("What is your age?");

age = Number(age);

console.log(Boolean(NaN));

console.log(Boolean(0));

// TODO: If the user enters something that EXPLICITLY CONVERTS to 'NaN', alert them.
if (!age) {
  alert("This is not a number!");
}
