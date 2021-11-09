const sumAll = function (num1, num2) {
	let sum = 0;
	let gnum = 0;
	if (isNaN(num1) || isNaN(num2)) {
		return "ERROR";
	} else if (num1 < 0 || num2 < 0) {
		return "ERROR";
	} else if (typeof num1 == "string" || typeof num2 == "string") {
		return "ERROR";
	} else if (num1 < num2) {
		for (; num1 <= num2; num1++) {
			sum += num1;
		}
	} else {
		for (; num2 <= num1; num2++) {
			sum += num2;
		}
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
