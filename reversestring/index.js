//10-22-19

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// turn the string into an array
// reverse the array "array.prototype.reverse()"
// restringify the array

function reverse(string) {
    const array = string.split("");
    array.reverse();
    return array.join("");
  }
  
//   shorter solution
  function reverse(string) {
    debugger
    return string
      .split("")
      .reverse()
      .join("");
  }
  
  // alternative solution without the .reverse() function, uses a for loop
  
  // create an empty array string called 'reversed'
  // for each character in the provided string
  // take the character and add it to the start of the 'reversed'
  // return the variable 'reversed'
  
  // try to avoid using the for loop syntax because it introduces a  lot of room for error
  // use for/of syntax instead
  
  //for / of syntax
  // for (**temporary variable** of **iterable object**) {
  //
  // }
  
  function reverse(string) {
    let reversed = "";
    for (let character of string) {
      reversed = character + reversed;
      debugger

    }
    return reversed;
  }
  
  // uses the reduce helper method
  
  // reduce takes in the all the values in an array and condenses them down to one single value
  // reduce takes in two arguements, an arrow function and an initial value 
  // everytime reduce runs, it takes the intial value and passes it into the arrow function as the first argument 
  // the value that is returned from the inner function {} will be used as the starting arg for the next successive run of the function.
  // the function runs one time for each value in the array. 
  
  function reverse(string) {
      debugger
    return string.split("").reduce((reversed, character) => {
      return character + reversed;
    }, '');
  }

//   reverse('hello')
  
  //one liner with ES6 implicit return 
  
  const reverse = (string) => (string.split('').reduce((rev, char) => char + rev, ''))
  
  module.exports = reverse;
  
  