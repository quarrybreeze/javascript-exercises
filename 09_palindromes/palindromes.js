const palindromes = function (string) {
    let stringNoPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    stringNoPunctuation = stringNoPunctuation.toLowerCase();
    // console.log(stringNoPunctuation);
    let arrRaw = stringNoPunctuation.split("")
    // console.log(arrRaw);

    let cleanedArr = arrRaw.filter(function(letter) {
        return letter !== " ";
    })
    // console.log(cleanedArr);
    let cleanedString = cleanedArr.join();

    let reversedArr = cleanedArr.reverse();
    // console.log(reversedArr);


    let reversedString = reversedArr.join();

    // console.log(cleanedString);
    // console.log(reversedString);

    if(cleanedString == reversedString) {
        return true;
    } else {
        return false;
    }



    // console.log(cleanedArr == reversedArr)

    // if (cleanedArr == reversedArr) {
    //     return true;
    // } else {
    //     return false;
    // }
};



// palindromes("I am, a string!");

// Do not edit below this line
module.exports = palindromes;
