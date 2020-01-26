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
  console.log(piecesPositionList);
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
      printBoard(BOARD);
      result = movePlayer;
      break;
    }
  }

  return result;
}

function getIndex(column) {
  return column.index + BOARD_COLUMNS * column.topRow;
}

function printBoard(BOARD) {
  let output = "";

  for (let i = 0; i < BOARD.length; i++) {
    output += BOARD[i] || "-";

    if (i > 0 && i % BOARD_COLUMNS === 6) {
      output += "\n";
    } else {
      output += "\t";
    }
  }
  console.log(output);
}

function hasWinner(player, BOARD) {
  let indexes = BOARD.reduce((arr, pos, index) => {
    if (pos === player) {
      arr.push(index);
    }
    return arr;
  }, []);

  console.log(`Player: ${player}\tindexes: ${indexes}`);
  let result = false;

  if (indexes.length >= 4) {
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      result = findWinner(index, indexes, DIRECTION.Horizontal, 1);
      if (result) {
        console.log("Horizontal win");
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Vertical, 1);
      if (result) {
        console.log("Vertical win");
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Left, 1);
      if (result) {
        console.log("Diagonal Left win");
        break;
      }

      result = findWinner(index, indexes, DIRECTION.Right, 1);
      if (result) {
        console.log("Diagonal Right win");
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
      if (startingIndex % BOARD_COLUMNS === 6) {
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

  if (
    validMove &&
    indexes[nextIndex] &&
    indexes.findIndex(val => val === nextIndex) > 0 &&
    depth < 4
  ) {
    return findWinner(nextIndex, indexes, step, depth + 1);
  } else {
    return depth >= 4;
  }
}

module.exports = {whoIsWinner};
