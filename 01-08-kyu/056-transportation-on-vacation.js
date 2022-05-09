/*
============
INSTRUCTIONS
============
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

const rentalCarCost = (days) => {
  const dailyCost = 40;
  const disc3MoreDaysRent = 20;
  const disc7MoreDaysRent = 50;

  const totalRentCost = days * dailyCost;

  if (days >= 7) return totalRentCost - disc7MoreDaysRent;
  if (days >= 3) return totalRentCost - disc3MoreDaysRent;
  return totalRentCost;
};


/*
====================
ALTERNATIVE SOLUTION
====================

const rentalCarCost = (days) => {
  const dailyCost = 40;
  const disc3MoreDaysRent = 20;
  const disc7MoreDaysRent = 50;

  let totalCost = days * dailyCost;

  if(days >= 7) {
    totalCost -= disc7MoreDaysRent;
  } else if(days >= 3) {
    totalCost -= disc3MoreDaysRent;
  }

  return totalCost;
};

---------------------
without re-writing
problem's specs
---------------------

const rentalCarCost = d => {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

*/

