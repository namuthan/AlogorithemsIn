// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, resString = '') {

  // think of the base case
  if(n === row) {
    return;
  }

  if(n === resString.length) {
    console.log(resString);
    return steps(n, row + 1)
  }

  if(resString.length <= row) {
    resString += '#';
  } else {
    resString += ' ';
  }
  steps(n, row, resString);
}

function steps_simpe(n) {
  for(let row = 0; row<n; row++) {
    let rowString = '';
    for(let col = 0; col<n; col++) {
      if(col <= row) {
        rowString += '#';
      } else {
        rowString += ' ';
      }
    }
    console.log(rowString)
  }
}

function steps_using_repeat(n) {
  for(let i = 1; i<=n; i++) {
    let str = "#".repeat(i) + " ".repeat(n - i);
    console.log(str);
  }
}

module.exports = steps;
