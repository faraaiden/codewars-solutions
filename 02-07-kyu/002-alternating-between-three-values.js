/*
============
INSTRUCTIONS
============
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies
  f(a) = b
  f(b) = c
  f(c) = a

EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/

const f = (x, cc) => {
  let output = null;

  if (x === cc.a) output = cc.b;
  else if (x === cc.b) output = cc.c;
  else output = cc.a;

  return output;
};

/*
====================
ALTERNATIVE SOLUTION
====================

const f = (value, { a, b, c }) => {
  return {
    [a]: b,
    [b]: c,
    [c]: a,
  }[value];
};

*/
