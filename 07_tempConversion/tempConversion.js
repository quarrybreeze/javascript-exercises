const convertToCelsius = function(temp) {
  let tempC = ((temp - 32) * 5 / 9);
  tempC = Math.round(tempC * 10)/10;
  return tempC;
};

const convertToFahrenheit = function(temp) {
  let tempF = ((temp * 9 / 5) + 32);
  tempF = Math.round(tempF * 10)/10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
