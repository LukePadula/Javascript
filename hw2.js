// Task 1
var colours = [
  "red",
  "blue",
  "orange",
  "black",
  "yellow",
  "pink",
  "purple",
  "brown",
  "white",
  "green",
];

// Task 2
colours[0] = "redish";

// Task 3
numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray.splice(0, colours.length / 2);

// Task 4
// Pop
colours.pop();

// Push
colours.push("green");

// Shift
colours.shift();
console.log(colours);

// Unshift
colours.unshift("turquoise", "lylac");

// Concat
var newColours = ["maroon", "red"];
colours.concat(newColours);

// Splice and slice
colours.splice(0, 1);
var slicedColours = colours.slice(0, 2);

// Reverse
colours.reverse();

// Join
colours.join();
var coloursString = colours.join(" - ");
console.log(coloursString);

// For each
colours.forEach((element, index) => {
  console.log(element, index);
});

// Includes / index of
console.log(colours.includes("blue"));
console.log(colours.indexOf("blue"));

const checkLength = (element) => {
  return element.length > 4;
};

// Every/some
console.log(colours.every(checkLength));
console.log(colours.some(checkLength));

// Filter
var longColours = colours.filter(checkLength);
console.log(longColours);

// Find/Find index
console.log(colours.find(checkLength));
console.log(colours.findIndex(checkLength));

// Sort
colours.sort();
console.log(colours);

// Map
var uppercaseColours = colours.map((x) => x.toUpperCase());
console.log(uppercaseColours);

// Section 2

// Task 1 ,2, 3 and 4
function func1() {
  var num1 = 1;
  func2();

  function func2() {
    var num2 = 2;
    func3();

    function func3() {
      var num3 = 2;
      num4 = 5;
      var fruit = ["Orange", "Apple", "Blueberries"];

      // Task 5
      for (const i of fruit) {
        console.log(i);
        let singleFruit = i;
      }
    }
  }
}

function makeCar(brand, model, colour) {
  return {
    brand: brand,
    model: model,
    colour: colour,
    describe: describeCar,
    describeDetails: describeDetails,
  };
}
// Task 6,7,8,9,10
const car1 = makeCar("Ford", "Fiesta", "Silver");

const car2 = makeCar("Audi", "A3", "White");

function describeCar() {
  return `${this.brand} ${this.model}`;
}

function describeDetails() {
  return this.colour;
}

console.log(car1.describe());

// Task 11
console.log(car1.describe.call(car2));

// Task 12
const bindCarDetails = describeDetails.bind(car2);

console.log(bindCarDetails());

// Task 14
setTimeout(func1, 1000);

// Task 13/ 15/ 16
const timer = setInterval(sayHello, 1000);
let i = 0;

function sayHello() {
  try {
    if (i > 4) {
      clearInterval(timer);
    } else {
      i++;
      console.log("Hello", i);
    }
  } catch (e) {
    console.log(e);
  }
}

// Task 17
var mainColour =
  uppercaseColours.includes("GREEN") || uppercaseColours.includes("BLUE")
    ? "Main colour"
    : "No main colours";

console.log(mainColour);
