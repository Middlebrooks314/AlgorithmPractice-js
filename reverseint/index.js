// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign(n) helper function will return 1 if n is post and -1 if n is neg
// turn into a string and then split into an array in order to use reverse() then join back into a string.
// use parseIng to turn a string into a number and then use the logic of finding out if the number is negative to replace the negative sign

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
