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
const BOARD_ROWS = 6;
const COLORS = {Red: 1, Yellow: 2};
const COLUMNS = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6
};

const board = new Array(BOARD_COLUMNS * BOARD_ROWS).fill(0);

function whoIsWinner(piecesPositionList) {
  // console.log("piecesPositionList :", piecesPositionList);

  for (let i = 0; i < piecesPositionList.length; i++) {
    let result = addToBoard(piecesPositionList[i]);
    if (result) {
      return result;
    }
  }

  // printBoard(board);
  return "Draw";
}

function addToBoard(move) {
  let column = move.split("_")[0];
  let color = move.split("_")[1];

  // console.log(move, column, COLUMNS[column], color, COLORS[color]);

  for (let i = COLUMNS[column]; i < board.length; i += BOARD_COLUMNS) {
    if (!board[i]) {
      board[i] = COLORS[color];
      // console.log(`Adding move for ${color} at position: ${printcolumn(i)}`);

      let result = isConnectFour(i, COLORS[color], 1);
      // console.log(`isWin: ${result}`);

      if (result) {
        return color;
      }
      break;
    }
  }
}

// function printcolumn(index) {
//   let column = index % BOARD_COLUMNS;
//   let colName = Object.keys(COLUMNS).find(key => COLUMNS[key] === column);
//   let row = Math.floor(index / BOARD_COLUMNS);

//   return colName + row;
// }

// function printBoard(board) {
//   const table = board.reduce((prev, curr, i) => {
//     let col = i % BOARD_COLUMNS;
//     let row = Math.floor(i / BOARD_COLUMNS);

//     // console.log({i, curr, col, row});
//     prev[row] = prev[row] || [];
//     prev[row][col] = curr;
//     return prev;
//   }, []);

//   console.table(table);
// }

function isConnectFour(index, player, depth) {
  // console.log("ConnectFour: ", {index, player, depth});

  let result = false;

  if (testLeft(index, player, depth) >= 4) {
    result = true;
  } else if (testRight(index, player, depth) >= 4) {
    result = true;
  }

  return result;
}

function testLeft(index, player, depth) {
  // console.log("Left: ", {index, player, depth});
  let left = index - BOARD_COLUMNS - 1;

  if (depth < 4 && board[left] && board[left] === player) {
    return testLeft(left, player, depth + 1);
  } else {
    return depth;
  }
}

function testRight(index, player, depth) {
  // console.log("Right: ", {index, player, depth});
  let right = index - BOARD_COLUMNS + 1;

  if (depth < 4 && board[right] && board[right] === player) {
    return testRight(right, player, depth + 1);
  } else {
    return depth;
  }
}

module.exports = {whoIsWinner};
