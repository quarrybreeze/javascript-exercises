const fibonacci = function (int) {
    let num = 0;

    if (typeof int === "string") {
        num = Number(int);
    } else {
        num = int;
    }


    let fibArr = [];
    fibArr[0] = 0;
    fibArr[1] = 1;

    if (num >= 2) {
        for (let i = 2; i <= num; i++) {
            fibArr[i] = fibArr[(i-1)] + fibArr[(i-2)];
            // console.log(fibArr[i]);
        }
    } else if ( num < 0) {
        return "OOPS";
    }

    return fibArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
