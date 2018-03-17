// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aLetters = toOnlyLowerCaseLetters(stringA);
  const bLetters = toOnlyLowerCaseLetters(stringB);
  const aCharMap = getCharMap(aLetters);
  const bCharMap = getCharMap(bLetters);
  const aKeys = Object.keys(aCharMap);
  const bKeys = Object.keys(bCharMap);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const char of aKeys) {
    if (aCharMap[char] && bCharMap[char] && aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function toOnlyLowerCaseLetters(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function getCharMap(str) {
  return str.split('').reduce((result, curr) => {
    result[curr] = result[curr] + 1 || 1;
    return result;
  }, {});
}

function anagramsWithSort(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return toOnlyLowerCaseLetters(str).split('').sort().join('');
}

module.exports = anagrams;
