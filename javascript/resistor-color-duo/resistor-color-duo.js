//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  var value = "";
  for (var i = 0; i < 2; i++) {
    value += COLORS.indexOf(colors[i]);
  }
  return parseInt(value);
};


const COLORS = [
  "black",
  "brown",
  "red", 
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey"
]