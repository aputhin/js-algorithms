// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

function reverseWithForLoop(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverseWithReduce(str) {
  return str
    .split('')
    .reduce((res, char) => char + res, '');
}

module.exports = reverse;
