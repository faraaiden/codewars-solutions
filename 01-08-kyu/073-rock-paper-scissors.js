/*
============
INSTRUCTIONS
============
You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }

  if (p1 === 'scissors') {
    return p2 === 'paper' ? 'Player 1 won!' : 'Player 2 won!';
  }

  if (p1 === 'paper') {
    return p2 === 'scissors' ? 'Player 2 won!' : 'Player 1 won!';
  }

  if (p1 === 'rock') {
    return p2 === 'scissors' ? 'Player 1 won!' : 'Player 2 won!';
  }
};

/*
====================
ALTERNATIVE SOLUTION
====================

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }

  if (p1 === 'scissors') {
    if (p2 === 'paper') {
      return 'Player 1 won!';
    } else {
      return 'Player 2 won!';
    }
  }

  if (p1 === 'paper') {
    if (p2 === 'scissors') {
      return 'Player 2 won!';
    } else {
      return 'Player 1 won!';
    }
  }

  if (p1 === 'rock') {
    if (p2 === 'scissors') {
      return 'Player 1 won!';
    } else {
      return 'Player 2 won!';
    }
  }
};

*/
