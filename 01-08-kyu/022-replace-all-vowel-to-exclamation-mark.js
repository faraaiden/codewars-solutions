/*
============
INSTRUCTIONS
============
>>> Goal: replace all vowel to exclamation mark in the sentence

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples:
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

const replace = str => str.replace(/[aeiou]/gi, '!');

/*
=====================
ALTERNATIVE SOLUTIONS
=====================

const replace = (str) => {
  const output = [];

  for (let char of str) {
    switch (char) {
      case 'A':
      case 'a':
      case 'E':
      case 'e':
      case 'I':
      case 'i':
      case 'U':
      case 'u':
      case 'O':
      case 'o':
        output.push('!');
        break;
      default:
        output.push(char);
    }
  }

  return output.join('');
};

---------------------

const replace = (str) => {
  const output = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
      case 'a':
      case 'E':
      case 'e':
      case 'I':
      case 'i':
      case 'U':
      case 'u':
      case 'O':
      case 'o':
        output.push('!');
        break;
      default:
        output.push(str[i]);
    }
  }

  return output.join('');
};

--------------------

const replace = (str) => {
  let newStr = '';
  const vowels = 'AaEeIiUuOo';

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      newStr += str[i];
    } else {
      newStr += '!';
    }
  }

  return newStr;
};

*/
