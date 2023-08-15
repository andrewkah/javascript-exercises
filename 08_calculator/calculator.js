const add = function(first, last) {
	return first + last
};

const subtract = function(first, ...args) {
	return first - args
};

const sum = function(sumArgs) {
  let sum = 0;
  for (let i = 0; i < sumArgs.length; i++) {
    sum += sumArgs[i];
  }
  return sum;
	
};

const multiply = function(multiplyArgs) {
  let answer = 1;
  for (let i = 0; i < multiplyArgs.length; i++) {
    answer *= multiplyArgs[i];
  }
  return answer;
};

const power = function(first, power) {
	return first ** power;
};

const factorial = function(num) {
	if (Number.isInteger(num)) {
    let answer = 1;
    if (num > 1){
      for (let index = num; index >= 1; index--) {
        answer *= index;        
      }
      return answer;
    } else {return answer}
  }
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
