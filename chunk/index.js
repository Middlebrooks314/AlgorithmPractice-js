// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let out = [];
//   let temp = [];
//   for (let i = 0; i < array.length; i++) {
//     if (temp.length < size) {
//       temp.push(array[i]);
//     }
//     if (temp.length === size) {
//       out.push(temp);
//       temp = [];
//     }
//   }
//   if (temp.length) {
//     out.push(temp);
//   }
//   return out;
// }

//solution #1
// make an array "chunked" that will hold all the chunks
// grab the last element of the chunked array, if that is undefined or if the chunk inside is equal to the size then push another chunk array in with the array element

// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     // if last is undefined -or- the last chunk is = to the arg size
//     // then push a new chunk array into chunked array
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       //otherwise add the element to the not full chunk.
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// solution #2 (.slice())
//
function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
