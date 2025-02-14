const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  return totalSum;
};

const multiply = function(arr) {
  let totalProduct = 1;
  for (let i = 0; i <arr.length; i++) {
    totalProduct = totalProduct * arr[i];
  }
  return totalProduct;
};

const power = function(a,b) {
	let totalProduct = 1;
  for (let i = 0; i < b; i++) {
    totalProduct = totalProduct * a;
  }
  return totalProduct;
};

const factorial = function(a) {
	let totalProduct = 1;
  if (a == 0) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      totalProduct = totalProduct * i;
    }
    return totalProduct;
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
