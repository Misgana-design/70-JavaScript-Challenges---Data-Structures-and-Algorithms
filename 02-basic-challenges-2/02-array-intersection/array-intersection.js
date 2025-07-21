//Solution 1

// function arrayIntersection(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//     }
//   }
//   return newArr;
// }

//Solution 2

function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let newArr = [];
  for (let num of arr2) {
    if (set1.has(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

module.exports = arrayIntersection;
