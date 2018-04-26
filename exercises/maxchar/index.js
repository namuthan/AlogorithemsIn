// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// what is the most common character in the string
//

function maxChar(str) {

  // create a character map (key -> char, value -> repition value)
  const charMap = {};

  for(let char of str) {

    if(charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  }


  // iterate through the map to find the most used character

  let max = 0;
  let maxChar = '';

  for(let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
