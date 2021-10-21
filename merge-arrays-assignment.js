const merge = (arr1, arr2) => {
  let result = Array.prototype.concat(arr1, arr2);
  return result.sort((a, b) => a - b);
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));