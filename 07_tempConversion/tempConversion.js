const convertToCelsius = function(fahrenheitDegrees) {
  // Formula for conversion - C = (F - 32) * 5/9)
  const celsius = (fahrenheitDegrees - 32) * 5 / 9;

  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusDegrees) {
  // Formula for conversion - F = (C * 9/5) + 32
  const fahrenheit = (celsiusDegrees * 9 / 5) + 32;
  
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
