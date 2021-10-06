// LoopyLighthouse quiz
let n = 0;
for (let n = 100; n <= 200; n ++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log ("LoopyLighthouse");
  } 
  else if (n % 4 === 0) {
    console.log ("Lighthouse");
  }
  else if (n % 3 === 0) {
    console.log ("Loopy");
  }
  else {
    console.log (n);
  }
} 



// Looping over Arrays using for...of loops (this code wouldn't run)

const amounts = [61.00, 52.25, 112.99, 5.00];
const total = 0;
for (let amount of amounts) {
  total += amounts;
}
console.log("Order total is: ", total);
