// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let log = '';
    if (i % 3 === 0) {
      log += 'fizz';
    }
    if (i % 5 === 0) {
      log += 'buzz';
    }
    console.log(log || i);
  }
}

function fizzBuzzWithGenerator(n) {
  function* generator(max) {
    let curr = 1;
    while (curr <= max) yield curr++;
  }
  const gen = generator(n);
  for (const i of gen) {
    const log = `${i % 3 === 0 ? 'fizz' : ''}`
      + `${i % 5 === 0 ? 'buzz' : ''}`;
    console.log(log || i);
  }
}

module.exports = fizzBuzz;
