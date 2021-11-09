const reverseString = function(str) {
    let reverseStr;
    
    for (let i = str.length-1, let j = 0; i>=0; i--, j++) {
        reverseStr[j] = str[i];

    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
