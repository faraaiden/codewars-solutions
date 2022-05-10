/*
============
INSTRUCTIONS
============
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

const cockroachSpeed = s => Math.floor((s * 100_000) / 3_600);

/*
===================
FOR FURTHER DETAILS
===================
100_000 -> km to cm
3_600 -> hour to seconds
*/