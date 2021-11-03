const smartGarbage = function (trash, bins){
  //check if bins contain type of trash being dumped
  for (let content in bins) {
    if (content === trash) {
      bins[content] ++
    }
  }
  return bins
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


// const smartGarbage = function (trash, bins){
//   bins[trash] ++
//   return bins
// };
// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));