const add = function (a, b) {
	let sum = a + b;
	return sum;
};

const subtract = function (a, b) {
	let difference = a - b;
	return difference;
};

const sum = function (array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
	return array.reduce(
		(previousValue, currentValue) => previousValue * currentValue,
		1
	);
};

const power = function (a, x) {
	return Math.pow(a, x);
};

const factorial = function (a) {
	if (a == 0 || a == 1) {
		return 1;
	} else {
		let factorial = 1;
		for (; a > 0; a--) {
			factorial *= a;
		}
		return factorial;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
