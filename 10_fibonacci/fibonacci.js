const fibonacci = function (element) {
	element = parseInt(element);
	if (element >= 0) {
		if (element === 0) return 0;
		if (element === 1) return 1;

		return fibonacci(element - 2) + fibonacci(element - 1);
	} else {
		return "OOPS";
	}
};

// Do not edit below this line
module.exports = fibonacci;
