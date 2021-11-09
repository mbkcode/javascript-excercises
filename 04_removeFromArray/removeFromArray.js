const removeFromArray = function (array, ...rem) {
	let num = array.length;
	for (let j = 0; j < rem.length; j++) {
		for (let i = 0; i < num; i++) {
			if (array[i] === rem[j]) {
				array.splice(i, 1);
			}
		}
	}
	return array;
};
// Do not edit below this line
module.exports = removeFromArray;
