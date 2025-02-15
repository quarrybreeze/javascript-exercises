const findTheOldest = function(arr) {

const currentYear = (new Date()).getFullYear();

    const oldest = arr.sort(function(a,b) {
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = currentYear;
        }
        if (a.yearOfBirth == undefined) {
            a.yearOfBirth = currentYear;
        }

        if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentYear;
        }
        if (b.yearOfBirth == undefined) {
            b.yearOfBirth = currentYear;
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
