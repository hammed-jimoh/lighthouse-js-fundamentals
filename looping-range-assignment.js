const range = (start, end, step) => {
  let newArray = [];
  for (let i = start; i <= end; i += step) {
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
      return [];
    }
    newArray.push(i);
  }
  return newArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
