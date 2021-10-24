const merge = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i ++){
    arr1.push(arr2[i]);
  }
  console.log(arr1)
// rearrange a merged array into ascending order: the new merged array is arr1
// k is the first element of the array and k+1 is the second element of the array
  for (let j = 0; j < arr1.length; j++){
    for (let k = 0; k < arr1.length - j - 1; k++) {
      if(arr1[k + 1] < arr1[k]) {
        [arr1[k], arr1[k+1]] = [arr1[k+1], arr1[k]]
       }
    }
  }
  return arr1
}
console.log(merge([4], [2, 5, 8]));
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 1, 2, 6 ], []));