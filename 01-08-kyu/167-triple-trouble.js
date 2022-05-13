/*
============
INSTRUCTIONS
============
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

const tripleTrouble = (...args) => {
  let output = '';
  const arrOfArgs = args;

  for (let i = 0; i < arrOfArgs[0].length; i++) {
    output += arrOfArgs[0][i];
    output += arrOfArgs[1][i];
    output += arrOfArgs[2][i];
  }

  return output;
};


/*
=====================
ALTERNATIVE SOLUTIONS
=====================
const tripleTrouble = (one, two, three) => {
  let output = '';

  for(let i = 0; i < one.length; i++) {
    output += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }

  return output;
}

---------------------

const tripleTrouble = (one, two, three) => {
  let output = '';

  for(let i = 0;i < one.length; i++) {
    output += one[i] + two[i] + three[i];
  }

  return output;
}

*/


/*
====
TEST
====
*/

console.log(tripleTrouble('aaa', 'bbb', 'ccc')); // abcabcabc
