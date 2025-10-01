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
  if (!email.includes(".")) return false;
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
  const labels = domain.split(".");

  for (const label of labels) {
    console.log(label);
    if (label.length === 0 || label.length > 63) return false;
  }
  if (local[0] === "." || local[local.length - 1] === ".") return false;
  if (local.includes("..")) return false;
  if (!localEveryCharAllowed(local)) return false;
  if (!labelEveryCharAllowed(labels)) return false; /* Helper Functions */

  function isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  function isDigit(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
  }

  function isLetterOrDigit(char) {
    return isLetter(char) || isDigit(char);
  }

  function localEveryCharAllowed(locals) {
    const extra = "!#$%&'*+/=?^_`{|}~.-";
    for (let i = 0; i < locals.length; i++) {
      const localLocal = local[i];
      if (isLetterOrDigit(localLocal)) continue;
      if (extra.indexOf(localLocal) !== -1) continue;
      return false;
    }
    return true;
  }

  function labelEveryCharAllowed(labels) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (isLetterOrDigit(label)) continue;
      if (label.includes("-")) continue;
      return false;
    }
    return true;
  }
  return true;
}
module.exports = validateEmail;
