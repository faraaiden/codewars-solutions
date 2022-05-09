/*
============
INSTRUCTIONS
============
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:
last - The Date object with the date of the last period
today - The Date object with the date of the check
cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

const periodIsLate = (last, today, cycleLength) => {
  const daysPassedInMiliseconds = today - last;
  const aDayInMiliseconds = 24 * 3600 * 1000;

  const daysPassed = daysPassedInMiliseconds / aDayInMiliseconds;

  return daysPassed > cycleLength;
};


/*
====================
ALTERNATIVE SOLUTION
====================

const periodIsLate = (last, today, cycleLength) => (today - last) / (24 * 3600 * 1000) > cycleLength;

--------------------

const periodIsLate = (last, today, cycleLength) => {
  const lastTime = last.getTime(); // in miliseconds relative to Januari 1, 1970 00:00:00 (since the ECMAScript) epoch
  const todayTime = today.getTime();

  const differenceInTime = todayTime - lastTime;
  const daysPassed = differenceInTime / (24 * 3600 * 1000); // 24 for hours in a day, 3600 for seconds in an hour, 1000 for miliseconds in a second

  return daysPassed > cycleLength;
};
*/

/*
====
TEST
====
*/
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); // false
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)); // true
