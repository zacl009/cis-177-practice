const myArray = ["String" 23, "Another String", true, false];

/**
 * the LENGTH of an ARRAY is always 1 less than the highest index.
 */

console.log(myArray[1]); // 23
console.log(myArray.length); // 5

console.log(myArray[99]); // undefined
myArray[1] = 177;
myArray[1000] = "James";
console.log(myArray[1000]); // James
console.log(myArray.length); // 1001
console.log(myArray[888]);


const data = [
  {name: "Zac", hobbies: ["eating", "cooking", "poker"]},
  {name: "Alex"},
  {name: "James"}
]

// log poker
console.log(data[0].hobbies[2]);

// Iterate over data and log every name.
for (let i = 0; i <= data.length - 1 ;i++) {
  console.log(data[i].name);
}
