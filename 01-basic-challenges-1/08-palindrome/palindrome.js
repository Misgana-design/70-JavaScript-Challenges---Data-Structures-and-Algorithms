//Solution 1

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

//Solution 2

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
