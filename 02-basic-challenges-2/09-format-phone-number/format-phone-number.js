//Solution
// function formatPhoneNumber(arrNum) {
//   const firstNum = arrNum.slice(0, 3).join("");
//   const secondNum = arrNum.slice(3, -4).join("");
//   const lastNum = arrNum.slice(6).join("");
//   return `(${firstNum}) ${secondNum}-${lastNum}`;
// }

//Solution 2
// function formatPhoneNumber(arrNum) {
//   let formatedNumber = arrNum.join("");
//   return `(${formatedNumber.substring(0, 3)}) ${formatedNumber.substring(
//     3,
//     -4
//   )}-${formatedNumber.substring(6)}`;
// }

//Solution 3
let formatPhoneNumber = (arrNum) =>
  `(${arrNum.slice(0, 3).join("")}) ${arrNum.slice(3, -4).join("")}-${arrNum
    .slice(6)
    .join("")}`;

module.exports = formatPhoneNumber;
