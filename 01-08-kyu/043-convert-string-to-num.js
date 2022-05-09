/*
============
INSTRUCTIONS
============
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

const stringToNumber = str => Number(str);

/*
====================
ALTERNATIVE SOLUTION
====================

const stringToNumber = str => parseInt(str)

--------------------

const stringToNumber = Number;
// assign the Number() built-in function to stringToNumber variable. So, when we call stringToNumber with an argument, the argument will be passed as Number parameter.

--------------------

const stringToNumber = str => +str;
// fastest solution since it doesn't perform any other operations
*/