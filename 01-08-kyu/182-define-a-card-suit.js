/*
============
INSTRUCTIONS
============
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

const defineSuit = card => card.includes('♣') ? 'clubs' : card.includes('♦') ? 'diamonds' : card.includes('♥') ? 'hearts' : 'spades';


/*
======================
ALTERNATIVES SOLUTIONS
======================

const defineSuit = card => {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }[card.slice(-1)]
}

-----------------------

const defineSuit = card => {
  switch(card.slice(-1)) {
    case '♣':
      return 'clubs';
    case '♦':
      return 'diamonds';
    case '♥':
      return 'hearts';
    case '♠':
      return 'spades'
  }
}

*/

