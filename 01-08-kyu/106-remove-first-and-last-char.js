/*
============
INSTRUCTIONS
============

*/

const removeChar = str => str.slice(1, str.length - 1);

/*
=====================
ALTERNATIVE SOLUTIONS
=====================

const removeChar = str => str.slice(1, -1);

---------------------

const removeChar = str => str.substring(1, str.length - 1);

---------------------

const removeChar = str => str.substr(1, str.length - 2);

---------------------

const removeChar = str => {
  const strToArr = str.split('');
  strToArr.shift();
  strToArr.pop();
  
  return strToArr.join('');
}

*/

/*
Notes:
The arguments of substring() represent the starting and ending indexes, while the arguments of substr() represent the starting index and the number of characters to include in the returned string.

Furthermore, substr() is considered a legacy feature in ECMAScript and could be removed from future versions, so it is best to avoid using it if possible.

let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil"

More on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/