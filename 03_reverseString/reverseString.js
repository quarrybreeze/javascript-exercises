const reverseString = function(string) {
    const tempArray = [];

    for (const letter of string) {
        tempArray.unshift(letter);
    }

    return tempArray.join("");
};


//toString(); // use this to get the array back to string
// Do not edit below this line
module.exports = reverseString;
