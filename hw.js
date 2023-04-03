// Task 1
var myName = "Luke";
var age = 23;
var student = true;

// Task 2
var number1 = 4;
var number2 = 10;

var numberSum = number1 + number2;
console.log("Number sum equals ", numberSum);

// Task 3
numberSum++;
console.log("Number sum +1 equals ", numberSum);

// Task 4
numberSum--;
console.log("Number sum -1 equals ", numberSum);

// Task 5
var firstName = "Luke";
var lastName = "Padula";

console.log(firstName.concat(" ", lastName));

// Task 6/7
var number3 = 10;
var number4 = 9;

if (number3 === number4 && number3 > 5) {
  console.log("Matched");
} else {
  console.log("No match");
}

// Task 8
var person = {
  name: "Luke",
  age: 23,
  height: 182,
};

// Part 2

// Task 1/2
function addNumber(number1, number2) {
  if (
    number1 < 0 ||
    number2 < 0 ||
    typeof number1 != "number" ||
    typeof number2 != "number"
  ) {
    console.log("invalid input");
  } else {
    return number1 + number2;
  }
}

// Task 3
var colours = ["blue", "green", "orange", "red"];

// Task 4
for (const i of colours) {
  console.log("for of", i);
}

colours.forEach((element) => console.log("for each", element));

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

// Task 5/6/7
person.nationality = "British";
person["gender"] = "male";
console.log(person);

// Task 8
for (const key in person) {
  console.log(key, person[key]);
}
