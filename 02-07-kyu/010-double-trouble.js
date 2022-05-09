/*
============
INSTRUCTIONS
============
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

const smallEnough = (a, limit) => !a.map((num) => num <= limit).includes(false);

/*
====================
ALTERNATIVE SOLUTION
====================

const smallEnough = (a, limit) => Math.max(...a) <= limit;

--------------------

const smallEnough = (a, limit) => a.every(num => num <= limit);

*/
