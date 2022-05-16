/*
============
INSTRUCTIONS
============
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/

const uniTotal = (string) =>
  [...string]
    .map((char) => char.charCodeAt(0))
    .reduce((acc, curr) => acc + curr, 0);

/*
====================
ALTERNATIVE SOLUTION
====================

const uniTotal = (string) =>
  string
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((acc, curr) => acc + curr, 0);

---------------------

const uniTotal = (string) =>
  [...string].reduce((acc, char) => acc + char.charCodeAt(0), 0);

*/

