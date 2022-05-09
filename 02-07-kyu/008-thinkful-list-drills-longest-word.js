/*
============
INSTRUCTIONS
============
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:
['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/

const longest = (words) => {
  let result = 0;

  for (let word of words) {
    if (word.length > result) result = word.length;
  }

  return result;
};

/*
====================
ALTERNATIVE SOLUTION
====================

const longest = words => words.reduce((currLongest, currWord) => Math.max(currLongest, currWord.length), 0);

*/
