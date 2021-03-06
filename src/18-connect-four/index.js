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



	A	B	C	D	E	F	G
0	Y	Y	R	Y	Y	R	R
1	R	R	Y	R		R	Y
2	R	Y	R	Y		Y	R
3	Y	R	Y	R		Y	Y
4	R	Y		R			
5		R					

*/

/*
Top Result:
*/

const BOARD_COLUMNS = 7;
const BOARD_ROWS = 6;
const DIRECTION = {
  Horizontal: 1,
  Vertical: BOARD_COLUMNS,
  Right: BOARD_COLUMNS + 1,
  Left: BOARD_COLUMNS - 1
};

const ARRAY_SIZE = BOARD_COLUMNS * BOARD_ROWS;

function whoIsWinner(piecesPositionList) {
  const COLUMNS = {
    A: {index: 0, topRow: 0},
    B: {index: 1, topRow: 0},
    C: {index: 2, topRow: 0},
    D: {index: 3, topRow: 0},
    E: {index: 4, topRow: 0},
    F: {index: 5, topRow: 0},
    G: {index: 6, topRow: 0}
  };

  const BOARD = new Array(ARRAY_SIZE).fill("");
  // console.log(piecesPositionList);
  let result = "Draw";

  for (let i = 0; i < piecesPositionList.length; i++) {
    let move = piecesPositionList[i];
    let moveColumn = move.split("_")[0];
    let movePlayer = move.split("_")[1];
    let column = COLUMNS[moveColumn];
    let boardIndex = getIndex(column);

    // console.log({player: movePlayer, column: moveColumn, index: boardIndex});
    BOARD[boardIndex] = movePlayer;
    column.topRow++;

    if (hasWinner(movePlayer, BOARD)) {
      result = movePlayer;
      break;
    }
  }

  // printBoard(BOARD);
  return result;
}

function getIndex(column) {
  return column.index + BOARD_COLUMNS * column.topRow;
}

// function printBoard(BOARD) {
//   let output = "";

//   for (let i = 0; i < BOARD.length; i++) {
//     output += BOARD[i] || "-";

//     if (i > 0 && i % BOARD_COLUMNS === 6) {
//       output += "\n";
//     } else {
//       output += "\t";
//     }
//   }
//   console.log(output);
// }

function hasWinner(player, BOARD) {
  let indexes = BOARD.reduce((arr, pos, index) => {
    if (pos === player) {
      arr.push(index);
    }
    return arr;
  }, []);

  // console.log(`Player: ${player}\tindexes: ${indexes}`);
  let result = false;

  if (indexes.length >= 4) {
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      result = findWinner(index, indexes, DIRECTION.Horizontal, 1);
      if (result) {
        // console.log(`${player} Player: Horizontal win`);
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Vertical, 1);
      if (result) {
        // console.log(`${player} Player: Vertical win`);
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Left, 1);
      if (result) {
        // console.log(`${player} Player: Diagonal Left win`);
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Right, 1);
      if (result) {
        // console.log(`${player} Player: Right Left win`);
        break;
      }
    }
  }
  return result;
}

function findWinner(startingIndex, indexes, step, depth) {
  let nextIndex = startingIndex + step;
  //i % BOARD_COLUMNS === 6
  let validMove = true;

  switch (step) {
    case DIRECTION.Horizontal:
    case DIRECTION.Right:
      if (startingIndex > 0 && startingIndex % BOARD_COLUMNS === 6) {
        validMove = false;
      }
      break;
    case DIRECTION.Left:
      if (startingIndex % BOARD_COLUMNS === 0) {
        validMove = false;
      }
      break;
    default:
      break;
  }

  if (validMove && indexes.findIndex(val => val === nextIndex) > 0 && depth < 4) {
    return findWinner(nextIndex, indexes, step, depth + 1);
  } else {
    return depth >= 4;
  }
}

module.exports = {whoIsWinner};
