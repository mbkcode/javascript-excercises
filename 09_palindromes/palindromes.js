const palindromes = function (str) {
	str = str.replace(/[^A-Za-z0-9_]/g, "").toLowerCase();
	let reverseStr = str.split("").reverse().join("");

	if (str == reverseStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
