/*
============
INSTRUCTIONS
============
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

const countPositivesSumNegatives = (input) => {
  if (input === null || input.length === 0) {
    return [];
  }

  let countPositive = 0;
  let sumNegative = 0;

  input.forEach((num) => {
    num > 0 ? (countPositive += 1) : (sumNegative += num);
  });

  return countPositive === 0 && sumNegative === 0
    ? []
    : [countPositive, sumNegative];
};

/*
Note:
Javascript is interpreted dynamically; it is read one by one, line by line. So the statement and expression order matters.

To give you an example:
``` function checkBox() { let emptyBox = null; if (emptyBox === null || emptyBox.length === 0) { return "Box is Empty" } }

checkBox() // "Box is Empty"

function checkBox() { let emptyBox = null; if (emptyBox.length === 0 || emptyBox === null) { return "Box is Empty" } }

checkBox() // "Uncaught TypeError: emptyBox is null"

@farhanaditya
*/
