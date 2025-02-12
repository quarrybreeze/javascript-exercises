const repeatString = function(string, num) {
    let tempString = '';

    if (num < 0) {
        return "ERROR";
    } else {

        for (i = 0; i < num; i++) {
            tempString = tempString + string;
        }
        return tempString;
    }
};

// 0 '' + hey
// 1 hey + hey
// 2 heyhey + hey
module.exports = repeatString;
