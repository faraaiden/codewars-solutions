/*
============
INSTRUCTIONS
============
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;