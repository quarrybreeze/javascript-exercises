const leapYears = function(year) {
    let isLeapYear = false;
    let isYearCentury = false;

    if ((year%100) === 0) {
        isYearCentury = true;
    }

    if ((year%4) === 0) {
        isLeapYear = true;
    }   else {
        isLeapYear = false;
    }

    if (isYearCentury) {
        if ((year%400) === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    }

    return isLeapYear;
};


//first, check is year is divisable by 4
//if yes, check if year is divisable by 100
//if no, then TRUE
//if yes, check if year is divisable by 400
//if yes, then TRUe
//else, false.

// Do not edit below this line
module.exports = leapYears;
