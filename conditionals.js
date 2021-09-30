const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!\n");


// second instruction to run

const temperature = 18;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!\n");




// Examples for Logical operators - (&& AND), (|| OR), (! NOT)

const isCitizen = true;
const age = 26;

// for AND operator
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// for OR operator
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//for NOT operator
if (!raining) {
  console.log("Leave your umbrella at home!\n");
}

