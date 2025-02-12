const sumAll = function(firstNum, secondNum) {

    if (firstNum < 0) {
        return "ERROR";
    }

    if (secondNum < 0) {
        return "ERROR";
    }

    if (Number.isInteger(firstNum)) {

    } else {
        return "ERROR"
    }

    if (Number.isInteger(secondNum)) {

    } else {
        return "ERROR"
    }


    tempNum1 = firstNum;
    tempNum2 = secondNum;

    if (secondNum < firstNum) {
        tempNum1 = secondNum;
        tempNum2 = firstNum;
    }

    let summedNum = 0;
    for (let i = tempNum1; i <= tempNum2; i++) {
        summedNum = summedNum + i;
    }
    return summedNum;
};

// Do not edit below this line
module.exports = sumAll;