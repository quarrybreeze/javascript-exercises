const getTheTitles = function(arr) {
    let titleArr = [];

    for (i=0; i < arr.length; i++) {
        titleArr[i] = arr[i].title;
    }
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
