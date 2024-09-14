const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
	const arraySum = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  
  return arraySum;
};

const multiply = function(arr) {
  const arrayProduct = arr.reduce((total, num) => {
    return total * num;
  }, 1)

  return arrayProduct;
};

const power = function(num, degree) {
	return Math.pow(num, degree);
};

const factorial = function(num) {
	if(num === 0)
    return 1;
  
  let result = 1;

  while(num != 1){
    result *= num;
    num--;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
