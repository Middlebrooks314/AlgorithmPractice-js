// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//initial attempt

function palindrome(str) {
    let reversed = str
      .split("")
      .reverse()
      .join("");
    debugger;
    if (reversed == str) {
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("hello");
  
  // solution number 1
  
  // comparison operator === will return true, else it will return false
  
  function palindrome(str) {
    const reversed = str
      .split("")
      .reverse()
      .join("");
    return str === reversed;
  }
  
  //solution number 2
  // .every() iterates over arrays and returns true if every index meets the given condition
  //
  
  function palindrome(str) {
    return str.split("").every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }
  
  module.exports = palindrome;
  