const methods = require("./index");

// console.log(
//   methods.connect_four.whoIsWinner([
//     "C_Yellow",
//     "E_Red",
//     "G_Yellow",
//     "B_Red",
//     "D_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "G_Red",
//     "C_Yellow",
//     "C_Red",
//     "D_Yellow",
//     "F_Red",
//     "E_Yellow",
//     "A_Red",
//     "A_Yellow",
//     "G_Red",
//     "A_Yellow",
//     "F_Red",
//     "F_Yellow",
//     "D_Red",
//     "B_Yellow",
//     "E_Red",
//     "D_Yellow",
//     "A_Red",
//     "G_Yellow",
//     "D_Red",
//     "D_Yellow",
//     "C_Red"
//   ])
// );
// console.log(
//   methods.connect_four.whoIsWinner([
//     "A_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "C_Red",
//     "G_Yellow",
//     "C_Red",
//     "C_Yellow",
//     "D_Red",
//     "G_Yellow",
//     "D_Red",
//     "G_Yellow",
//     "D_Red",
//     "F_Yellow",
//     "E_Red",
//     "D_Yellow"
//   ])
// );

let board = [
  "Y",
  "R",
  "R",
  "R",
  "R",
  "Y",
  "Y",
  "",
  "Y",
  "R",
  "R",
  "",
  "",
  "Y",
  "",
  "",
  "Y",
  "R",
  "",
  "",
  "Y",
  "",
  "",
  "",
  "Y",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
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

function isConnectFour(board, index, player, depth) {
  let isWin = false;

  if (testConnect(board, index, player, depth, BOARD_COLUMNS - 1) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, BOARD_COLUMNS + 1) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, 1) >= 4) {
    isWin = true;
  } else if (testConnect(board, index, player, depth, BOARD_COLUMNS) >= 4) {
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

function testHorizontal(board, index, player, depth) {
  let pos = index - 1;

  if (
    index % BOARD_COLUMNS > 0 &&
    index < BOARD_COLUMNS &&
    depth < 4 &&
    board[pos] &&
    board[pos] === player
  ) {
    return testLeft(board, pos, player, depth + 1);
  } else {
    return depth;
  }
}

function testVertical(board, index, player, depth) {
  let pos = index - BOARD_COLUMNS;

  if (
    index % BOARD_COLUMNS > 0 &&
    index < BOARD_COLUMNS &&
    depth < 4 &&
    board[pos] &&
    board[pos] === player
  ) {
    return testVertical(board, pos, player, depth + 1);
  } else {
    return depth;
  }
}

function testLeft(board, index, player, depth) {
  let left = index - BOARD_COLUMNS - 1;

  if (
    index % BOARD_COLUMNS > 0 &&
    index < BOARD_COLUMNS &&
    depth < 4 &&
    board[left] &&
    board[left] === player
  ) {
    return testLeft(board, left, player, depth + 1);
  } else {
    return depth;
  }
}

function testRight(board, index, player, depth) {
  let right = index - BOARD_COLUMNS + 1;

  if (
    index % BOARD_COLUMNS > 0 &&
    index < BOARD_COLUMNS &&
    depth < 4 &&
    board[right] &&
    board[right] === player
  ) {
    return testRight(board, right, player, depth + 1);
  } else {
    return depth;
  }
}

console.log(isConnectFour(board, 27, "Y", 1));
