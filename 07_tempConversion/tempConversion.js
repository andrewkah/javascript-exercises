const convertToCelsius = function(degrees) {
  degCelsius = (degrees - 32) * (5/9)
  return rounded(degCelsius);
};

const convertToFahrenheit = function(degrees) {
  degFahr = ((degrees * (9/5)) + 32)
  return rounded(degFahr);
};

function rounded(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
