let lastIndexOf = (newArray, num) => {
  for (let i = newArray.length; i >= 0; i--){
    if (num === newArray[i]) {
      return (i);
    }
  }
  return -1;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3))
console.log(lastIndexOf([ 5, 5, 5 ], 5))
console.log(lastIndexOf([], 3))