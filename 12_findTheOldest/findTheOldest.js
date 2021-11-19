const findTheOldest = function (array) {
	return array.reduce((a, b) => {
		const lastGuy = getAge(a.yearOfBirth, a.yearOfDeath);
		const nextGuy = getAge(b.yearOfBirth, b.yearOfDeath);
		return lastGuy > nextGuy ? a : b;
	});
};

const getAge = function (birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
