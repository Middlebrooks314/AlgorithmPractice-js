// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// common variations of this question
// 1. what is the most common character in the string ?
// 2. Does string A have the same characters as string B (is it an anagram)?
// 3. Does the given string have any repeated characters in it?

// tips to solve - make a character map (an object with string characters as key and # of occurences = the value )

// - convert string into an object where the keys are the letters and values are the number of times it occurs

// for of loop is used for iterating through a string or any type of iterable object 
// to iterate through an object use a for/in 


function maxChar(str) {
  const charMap = {};
    let max = 0
    let maxChar = ''

    // iterates over the string and if the character exists as a key, then 1 is added to the value 
    // else it is added to the keys and 1 is assigned as the value. 
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // iterates through the character map and if the value of a character is greater than the max variable value 
  // max is set to the value and maxChar is set to the key. 
  for (let char in charMap) {
      if (charMap[char] > max) {
          max = charMap[char]
          maxChar = char;
      }
  }
  return maxChar
}

module.exports = maxChar;
