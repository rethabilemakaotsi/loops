//1 Create a function that will calculate the square root of any number
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}
result = calculateSquareRoot(80);
console.log(result);

//2 create a function that will calculate the power of another number
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

 result = calculatePower(10, 5);
console.log(result)

//3 create a function that accepts an input and only rounds a number 

//4 create a function that accepts a decimal value  and rounds the value up
function roundUpDecimal (number){
  return Math.ceil(number)
}
result = roundUpDecimal(45.8888)
console.log(result)
//5 create a function that will take in 2 numbers and output the largest number between the 2
function findLargestNumber(number1, number2) {
  return Math.max(number1, number2);
}


 largerNumber = findLargestNumber(10, 5);
console.log(largerNumber);


//6 create a function that will take in 2 numbers and output the smallest number between the 2
function returnSmallestNumber(numb1,numb2){

  return Math.min(numb1,numb2)
}
result = returnSmallestNumber(10,5);
console.log(result)
//7 create a function that will generate a random whole number

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 76
 result = generateRandomNumber(1, 76);

console.log(result);

//8 Create a function that will calculate the area of a circle when a radius is the entered parameter
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}


var radius = 5;
var area = calculateCircleArea(radius);
console.log(area); 

//9 create a function that accepts a decimal value  and rounds the value down
function roundDownDecimal(value) {
    return Math.floor(value);
}
result = roundDownDecimal(3.76);
console.log(result)