/*
URL: https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript

Instructions:
Connect Four
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = 
    ["A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "G_Red",
    "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
Wikipedia says winner of connect four is first player to get four of ther pieces in a diagonal.

*/

/*
Notes:
- Game board is 7 columns wide and 6 rows high.
- Use a 1-D array instead of 2-D array. 
- try to use mod math to see if a player won.
- 5 diagonal pieces means starting from any one space on board, you only have to search 
  in a 4x5 grid for a winning turn.
- Could checking for a winner be solved recursively?

Steps: 
Populate Board
Check for winners
  - Could we do this as we're populating the board using our recursive function?
*/

/*
Top Result:
*/

const BOARD_COLUMNS = 7;
const BORAD_ROWS = 6;

function whoIsWinner(piecesPositionList) {
  return str;
}

module.exports = { whoIsWinner };
