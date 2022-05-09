/*
============
INSTRUCTIONS
============

Finish the uefaEuro2016() function so it return string just like in the examples below:

- uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
- uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
- uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

*/

const uefaEuro2016 = (teams, scores) => {
  // we can use destructuring array
  const [team1, team2] = teams;
  const [score1, score2] = scores;

  if (score1 === score2) {
    return `At match ${team1} - ${team2}, teams played draw.`;
  } else if (score1 > score2) {
    return `At match ${team1} - ${team2}, ${team1} won!`;
  } else {
    return `At match ${team1} - ${team2}, ${team2} won!`;
  }
};


/*
====================
ALTERNATIVE SOLUTION
====================

const uefaEuro2016 = (teams, scores) =>
  scores[0] === scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : scores[0] > scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;

--------------------

const uefaEuro2016 = (teams, scores) => {
  if (scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  } else if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  }
};

*/
