/*
============
INSTRUCTIONS
============
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

const solution = str => str.split('').reverse().join('');

/*
=====================
ALTERNATIVE SOLUTIONS
=====================

const solution = str => {
  let reversedStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}
*/
