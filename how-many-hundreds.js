const howManyHundreds = function(num){
  const containers = Math.floor(num / 100);
  return containers;
};
console.log(howManyHundreds(23070));
