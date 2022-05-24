/*
============
INSTRUCTIONS
============
Remove all exclamation marks from the end of sentence.

Examples:
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

const remove = str => str.replace(/!+$/, '');

/*
====================
ALTERNATIVE SOLUTION
====================
const remove = str => {  
  let curewntChar = '';
  let totalExclFromBehind = 0;
  
  for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] === '!') {
      currentChar = '!';
      totalExclFromBehind += 1;
    } else {
      break;
    }
  }
  
  return totalExclFromBehind > 0 ? str.slice(0, -totalExclFromBehind) : str;
}
*/
