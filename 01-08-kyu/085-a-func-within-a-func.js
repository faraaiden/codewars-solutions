/*
============
INSTRUCTIONS
============
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

var three = always(3);
three(); // returns 3

Closure
*/

// return a function that returns n
const always = (n) => {
  return function () {
    return n;
  };
};
