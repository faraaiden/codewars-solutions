/*
============
INSTRUCTIONS
============
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point

Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

const points = (games) => {
  let total = 0;
  
  games.forEach((game) => game[0] > game[2] ? (total += 3)
                        : game[0] < game[2] ? (total += 0)
                        : (total += 1)
  );
  
  return total;
};


/*
====================
ALTERNATIVE SOLUTION
====================

const points = (games) => {
  let totalPoint = 0;

  for (let matchPointResult of games) {
    const ourTeamPoint = Number(matchPointResult.slice(0, 1));
    const opponentTeamPoint = Number(matchPointResult.slice(2));

    if (ourTeamPoint > opponentTeamPoint) {
      totalPoint += 3;
    } else if (ourTeamPoint < opponentTeamPoint) {
      totalPoint += 0;
    } else {
      totalPoint += 1;
    }
  }

  return totalPoint;
};
*/


/*
====
TEST
====
*/
console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
); // 30

console.log(
  points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])
); // 10
