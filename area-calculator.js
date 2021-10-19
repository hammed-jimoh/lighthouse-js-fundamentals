function calculateRectangleArea(length, width){
  if (length < 0 || width < 0) {
    return undefined;
  }
  const calculateRectangleArea = length * width;
  return calculateRectangleArea;
}
console.log(calculateRectangleArea(1.50, 2.5));

function calculateCircleArea(radius){
  if (radius < 0) {
    return undefined;
  }
  let calculateCircleArea = (Math.PI * Math.pow(radius, 2));
  calculateCircleArea = calculateCircleArea.toFixed(3);
  calculateCircleArea = Number (calculateCircleArea);
  return calculateCircleArea;
}
console.log(calculateCircleArea(3.5));

function calculateTriangleArea(base, height){
  if (height < 0 || base < 0) {
    return undefined;
  }
  const calculateTriangleArea = (base * height) / 2;
  return calculateTriangleArea;
}
console.log(calculateTriangleArea(3, 2.5));