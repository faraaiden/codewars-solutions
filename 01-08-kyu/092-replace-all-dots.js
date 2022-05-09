/*
============
INSTRUCTIONS
============
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
*/

const replaceDots = (str) => str.replace(/\./g, '-');


/*
================
ANOTHER SOLUTION
================

const replaceDots = (str) => {
  let newStr = '';

  for (let char of str) {
    char === '.' ? (newStr += '-') : char;
  }

  return newStr;
};

*/
