
const loopyLighthouse = (range, multiples, words) => {
  // since range is an array, its best to use the index of start[0] and stop[1] rather than using a value stated
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log ("BattyBeacon");
    } 
    else if (i % 5 === 0) {
      console.log ("Beacon");
    }
    else if (i % 2 === 0) {
      console.log ("Batty");
    }
    else {
      console.log (i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])
