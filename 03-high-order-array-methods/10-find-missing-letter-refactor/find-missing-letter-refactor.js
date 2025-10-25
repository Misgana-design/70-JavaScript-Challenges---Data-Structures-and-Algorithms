//Solution 1

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);

//   const missingChar = arr
//     .map((char) => char.charCodeAt())
//     .find((current) => {
//       if (current - start > 1) {
//         return true;
//       }
//       start = current;
//       return false;
//     });
//   return missingChar ? String.fromCharCode(start + 1) : "";
// }

//Solution 2

function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  const missingChar = arr
    .map((char) => char.charCodeAt())
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });
  return missingChar ? String.fromCharCode(missingChar - 1) : "";
}

module.exports = findMissingLetter;
