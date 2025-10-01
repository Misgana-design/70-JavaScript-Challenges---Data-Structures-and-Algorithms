// Solution 1
function validateEmail(email) {
  // Create a regular expression to match the email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  // Return whether the email matches the regular expression
  return emailRegex.test(email);
}

// Solution 2
function validateEmail(email) {
  // Check if the email contains the "@" symbol
  if (email.indexOf('@') === -1) {
    return false;
  }

  // Split the email into the local part and domain
  const [localPart, domain] = email.split('@');

  // Check if the local part and domain meet the minimum length requirements
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  // Check if the domain extension consists of at least two characters
  const domainExtension = domain.split('.');
  if (
    domainExtension.length < 2 ||
    domainExtension[1].length < 2
  ) {
    return false;
  }

  // If all checks pass, return true
  return true;
}



// Validates an email address without using regular expressions.
// Rules covered (common, practical subset of RFC guidelines):
// - One and only one "@".
// - Non-empty local and domain parts.
// - No leading/trailing spaces; ASCII only.
// - Local part: <= 64 chars, no leading/trailing dot, no consecutive dots,
//   and characters limited to letters, digits, and the common safe symbols: !#$%&'*+/=?^_`{|}~.-
// - Domain part: total email length <= 254, has at least one dot,
//   no leading/trailing dot, no consecutive dots,
//   each label 1..63 chars, labels use letters/digits/hyphen and don't start/end with hyphen,
//   top-level label (last) has length >= 2 and only letters.
// If any rule fails, returns false; otherwise true.

function validateEmail(email) {                                   // Define a function named validateEmail that accepts one parameter: the email string.
  if (typeof email !== "string") return false;                     // Reject non-string inputs immediately.

  if (email !== email.trim()) return false;                        // Disallow leading or trailing whitespace by comparing to a trimmed copy.

  if (email.length === 0 || email.length > 254) return false;      // Overall length must be 1..254 characters (widely used practical limit).

  const atFirst = email.indexOf("@");                              // Find the first occurrence index of "@" in the string.
  const atLast  = email.lastIndexOf("@");                          // Find the last occurrence index of "@" in the string.
  if (atFirst <= 0 || atFirst !== atLast || atLast === email.length - 1) {
    return false;                                                  // Require exactly one "@", not at start or end (ensures both parts are non-empty).
  }

  const local  = email.slice(0, atFirst);                          // Extract the local part: everything before "@".
  const domain = email.slice(atFirst + 1);                         // Extract the domain part: everything after "@".

  if (local.length > 64) return false;                             // Local part practical limit is 64 characters.

  if (local[0] === "." || local[local.length - 1] === ".") return false; // Local part cannot start or end with a dot.

  if (local.includes("..")) return false;                          // No consecutive dots in the local part.

  if (!isAsciiOnly(local) || !isAsciiOnly(domain)) return false;   // Keep it simple: only ASCII characters allowed for this validator.

  if (!localEveryCharAllowed(local)) return false;                 // Enforce allowed character set for the local part.

  if (domain[0] === "." || domain[domain.length - 1] === ".") return false; // Domain cannot start or end with a dot.

  if (domain.includes("..")) return false;                         // No consecutive dots in the domain.

  const labels = domain.split(".");                                // Split the domain into labels by dots (e.g., ["example","com"]).
  if (labels.length < 2) return false;                             // Require at least one dot in the domain ("example.com" not just "example").

  for (const label of labels) {                                    // Validate each domain label individually.
    if (label.length === 0 || label.length > 63) return false;     // Each label must be 1..63 characters.

    if (!labelEveryCharAllowed(label)) return false;               // Only letters, digits, and hyphen inside labels.

    if (label[0] === "-" || label[label.length - 1] === "-") {     // Labels cannot start or end with hyphen.
      return false;
    }
  }

  const tld = labels[labels.length - 1];                           // The top-level domain is the last label (e.g., "com" in "example.com").
  if (tld.length < 2) return false;                                // TLDs should be at least 2 characters (e.g., "io", "com", "org").
  if (!isAllLetters(tld)) return false;                            // Keep TLDs alphabetic for practicality (e.g., "com", "zone", "io").

  return true;                                                     // All checks passed → valid email (for this validator's rules).
}

// ---------- helpers (also regex-free), each used above and explained line by line ----------

function isAsciiOnly(str) {                                        // Check whether a string contains only ASCII characters.
  for (let i = 0; i < str.length; i++) {                           // Iterate over every character index i.
    const code = str.charCodeAt(i);                                // Get the numeric Unicode code point at position i.
    if (code < 32 || code > 126) return false;                     // Allow printable ASCII range only (space to tilde).
  }
  return true;                                                     // If we never returned false, it's all ASCII.
}

function isLetter(ch) {                                            // Determine if a single character is an ASCII letter.
  const code = ch.charCodeAt(0);                                   // Fetch its code point.
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);// True for 'A'..'Z' or 'a'..'z'.
}

function isDigit(ch) {                                             // Determine if a single character is a digit '0'..'9'.
  const code = ch.charCodeAt(0);                                   // Fetch its code point.
  return code >= 48 && code <= 57;                                 // True for ASCII digits.
}

function isLetterOrDigit(ch) {                                     // Convenience: check letter OR digit.
  return isLetter(ch) || isDigit(ch);                              // Reuse helpers to keep intentions clear.
}

function localEveryCharAllowed(local) {                            // Validate each character of the local part.
  const extra = "!#$%&'*+/=?^_`{|}~.-";                            // The set of extra safe symbols allowed in local part (no quotes here to stay simple).
  for (let i = 0; i < local.length; i++) {                         // Loop through every character of the local string.
    const ch = local[i];                                           // Current character.
    if (isLetterOrDigit(ch)) continue;                             // Letters and digits are always allowed.
    if (extra.indexOf(ch) !== -1) continue;                        // If character is in the allowed symbol list, it's fine.
    return false;                                                  // Anything else → invalid.
  }
  return true;                                                     // All characters were allowed.
}

function labelEveryCharAllowed(label) {                            // Validate a domain label's characters.
  for (let i = 0; i < label.length; i++) {                         // Loop the label.
    const ch = label[i];                                           // Current character.
    if (isLetterOrDigit(ch)) continue;                             // Letters and digits are allowed.
    if (ch === "-") continue;                                      // Hyphen is also allowed (with separate start/end rule above).
    return false;                                                  // Any other character is not allowed in domain labels.
  }
  return true;                                                     // All characters are acceptable.
}

function isAllLetters(str) {                                       // Check that every character is a letter.
  if (str.length === 0) return false;                              // Empty strings are not "all letters".
  for (let i = 0; i < str.length; i++) {                           // Iterate over each character.
    if (!isLetter(str[i])) return false;                           // If any character isn't a letter, fail.
  }
  return true;                                                     // All characters were letters.
}

// ---------- minimal usage examples (feel free to remove in production) ----------
console.log(validateEmail("alice@example.com"));                   // true
console.log(validateEmail("a..b@example.com"));                    // false (consecutive dots in local)
console.log(validateEmail("bob.@example.com"));                    // false (local ends with dot)
console.log(validateEmail("bob@example"));                         // false (no dot in domain)
console.log(validateEmail("bob@-example.com"));                    // false (label starts with hyphen)
console.log(validateEmail("bob@example.c"));                       // false (TLD too short)


module.exports = validateEmail;
