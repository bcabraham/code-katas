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
const COLUMNS = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6
};
const DIRECTION = {
  Horizontal: 1,
  Vertical: BOARD_COLUMNS,
  Left: BOARD_COLUMNS + 1,
  Right: BOARD_COLUMNS - 1
};

function whoIsWinner(piecesPositionList) {
  const board = new Array(BOARD_COLUMNS * BOARD_ROWS).fill("");
  let result = "Draw";

  for (let i = 0; i < piecesPositionList.length; i++) {
    let move = piecesPositionList[i];
    let column = move.split("_")[0];
    let color = move.split("_")[1];

    let isWinner = false;

    for (let boardIndex = COLUMNS[column]; boardIndex < board.length; boardIndex += BOARD_COLUMNS) {
      if (!board[boardIndex]) {
        console.log(color, printcolumn(boardIndex));
        board[boardIndex] = color.charAt(0);

        isWinner = isConnectFour(board, boardIndex, color.charAt(0));
        if (isWinner) {
          console.log(`${color}(${color.charAt(0)})`, printcolumn(boardIndex));
        }
        break;
      }
    }

    if (isWinner) {
      result = color;
      break;
    }
  }

  // console.log(board);

  printBoard(board);
  return result;
}

// TODO: Needs rework  as it doesn't handle case when moves aren't made in Right to Left or Left to right order.
// Ex: A -> C -> D -> B falls through this logic.
function isConnectFour(board, index, player) {
  let depth = 1;
  let isWin = false;

  if (testConnect(board, index, player, depth, DIRECTION.Right) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, DIRECTION.Left) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, DIRECTION.Horizontal) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, DIRECTION.Vertical) >= 4) {
    isWin = true;
  }

  return isWin;
}

function testConnect(board, index, player, depth, step) {
  let col = index % BOARD_COLUMNS;
  let nextIndex = index - step;

  if (
    col > 0 &&
    col < BOARD_COLUMNS &&
    depth < 4 &&
    board[nextIndex] &&
    board[nextIndex] === player
  ) {
    return testConnect(board, nextIndex, player, depth + 1, step);
  } else {
    return depth;
  }
}

function printcolumn(index) {
  let column = index % BOARD_COLUMNS;
  let colName = Object.keys(COLUMNS).find(key => COLUMNS[key] === column);
  let row = Math.floor(index / BOARD_COLUMNS);

  return colName + row;
}

function printBoard(board) {
  let headers = ["", "A", "B", "C", "D", "E", "F", "G"].join("\t");
  let output = headers + "\n";

  for (let i = 0; i < board.length; i++) {
    let col = i % BOARD_COLUMNS;
    let row = Math.floor(i / BOARD_COLUMNS);

    if (col === 0) {
      output += row + "\t";
    }

    output += board[i] + "\t";

    if (col === BOARD_COLUMNS - 1) {
      output += "\n";
    }
  }

  // const table = board.reduce((prev, curr, i) => {
  //   let colName = Object.keys(COLUMNS).find(key => COLUMNS[key] === col);

  //   // console.log({i, curr, col, row});
  //   prev[row] = prev[row] || {};
  //   prev[row][colName] = curr;
  //   return prev;
  // }, []);

  console.log(output);
}

module.exports = {whoIsWinner};
