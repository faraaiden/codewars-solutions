/*
============
INSTRUCTIONS
============
Simple, remove the spaces from the string, then return the resultant string.
*/

const noSpace = str => str.replace(/\s/g, '');

/*
===============
OTHER SOLUTIONS
===============

const noSpace = str => str.split(' ').join('');

---------------

const noSpace = str => {
  const result = [];
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      continue;
    }
    result.push(str[i]);
  }
  
  return result.join('');
}

*/