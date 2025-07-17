//Solution 1

// function removeDuplicates(arr) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }



//Solution 2 with Javascript built-in function called Set object

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
