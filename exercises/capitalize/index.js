// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return capitalizeWithReduce(str);
}

function capitalizeWithReduce(str) {
  return str.split(' ').reduce((result, curr, i, arr) => {
    return result + curr[0].toUpperCase() + curr.slice(1) + (i+1 === arr.length ? '' : ' ');
  }, '');
}

function capitalizeWithForLoop(str) {
  const words = [];

  for (const word of str.split(' ')) {
    words.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return words.join(' ');
}

function capitalizeWithMaps(str) {
  return str.split(' ').map(
    (word) => word.split('').map(
      (ltr, idx) => idx === 0 ? ltr.toUpperCase() : ltr).join('')
    )
    .join(' ');
}

module.exports = capitalize;
