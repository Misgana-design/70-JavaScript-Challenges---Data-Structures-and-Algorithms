//Solution 1 unupdated one

// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return str === reversed;
// }

//Solution 2 unupdated one

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 3 updated one

function isPalindrome(str) {
  // return removeNonAlphaNumeric(str.toLowerCase());
  const cleaned = removeNonAlphaNumeric(str.toLowerCase());
  return removeNonAlphaNumeric(str.toLowerCase()) === reversing(cleaned);
}

function removeNonAlphaNumeric(str) {
  let formatedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isNonNumeric(char)) {
      formatedStr += char;
    }
  }
  return formatedStr;
}

function isNonNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reversing(str) {
  
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution Updated one

// function isPalindrome(str) {
//   const formated = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversed = str.toLowerCase().split("").reverse().join("");
//   return formated === reversed;
// }

module.exports = isPalindrome;
