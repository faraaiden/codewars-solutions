/*
============
INSTRUCTIONS
============

>>> Goal: combine strings function

Create a function named 'combineNames' that accepts two parameters (first and last name). The function should return the full name

Example:
combineNames('James', 'Stevens')

returns:
'James Stevens'

*/

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

/*
====================
ALTERNATIVE SOLUTION
====================

const combineNames = (...names) => names.join(' ');
// Above, we use rest operator to make arguments become an array. Then, we join those arguments/elements inside the array with a space so they become a string

*/