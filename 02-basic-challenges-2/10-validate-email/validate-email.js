//Solution 1

// function validateEmail(email) {
//   let formattedStr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return formattedStr.test(email);
// }

//Solution 2

function validateEmail(email) {
  if (typeof email !== "string") return false;
  if (email.trim() !== email) return false;
  if (email.length < 1 || email.length > 254) return false;
  const firstOccurence = email.indexOf("@");
  const lastOccurence = email.lastIndexOf("@");
  if (
    firstOccurence <= 0 ||
    firstOccurence !== lastOccurence ||
    lastOccurence === email.length - 1
  )
    return false;
  const fullEmail = email.split("@");

  const local = fullEmail[0];
  const domain = fullEmail[1];
  if (local[0] === "." || local[local.length - 1] === ".") return false;
  if (local.includes("..")) return false;
  if (!isAscii(local) || !isAscii(domain)) return false;
  for (let i = 0; i < local.length; i++) {
    const char = local[i];
    console.log(isLetter(char));
  }
  /* Helper Functions */

  function isAscii(str) {
    for (let i = 0; i < str.length; i++) {
      const code = str[i].charCodeAt(0);
      if (code < 32 || code > 126) return false;
    }
    return true;
  }

  function isLetter(str) {
    const code = str.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
}
module.exports = validateEmail;
