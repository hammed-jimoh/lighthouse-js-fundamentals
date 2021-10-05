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


//Which school to attend
const whichSchool  = function (age) {
  let result = "";
  if (age >= 1 && age < 13) {
    result = "Elementary School";
  }
  else if (age >= 13 && age < 19) {
    result = "Secondary School";
  }
  else if (age >= 19) {
    result = "Lighthouse Labs";
  }
  return result;
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));



//while loop practice 1
var x = 1 // starting position for while loop
while (x <= 20) { // ending condition for while loop
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    x = x + 1 ; // increment x at the end of each loop
}

//while loop Programming Quiz: Countdown, Liftoff!
var time = 60;
while (time >= 0) {
    if (time === 50) {
        console.log ("Orbiter transfers from ground to internal power");
    }
    else if (time === 31) {
        console.log ("Ground launch sequencer is go for auto sequence start");
    }
    else if (time === 16) {
        console.log ("Activate launch pad sound suppression system");
    }
    else if (time === 10) {
        console.log ("Activate main engine hydrogen burnoff system");
    }
    else if (time === 6) {
        console.log ("Main engine start");
    }
    else if (time === 0) {
        console.log ("Solid rocket booster ignition and liftoff!");
    }
    else {
        console.log ("T-" + time + " seconds");
    }
    time = time - 1;
}


// for loop to calculate the factorial of 12 i.e 12 x 11 x 10... x 1
let solution = 1;
for (let x = 1; x <= 12; x++) {
    solution *= x;
}
console.log (solution);