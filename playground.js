const methods = require("./index");

console.log(
  methods.connect_four.whoIsWinner([
    "C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red"
  ])
);

// console.log(methods.connect_four.whoIsWinner("aaaa"));
// console.log(methods.connect_four.whoIsWinner("a a a a"));

let board = [
  1,
  1,
  2,
  2,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  2,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  2,
  1,
  1,
  2,
  1,
  2,
  0,
  0,
  2,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0
];

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

function isConnectFour(index, player, depth) {
  console.log("ConnectFour: ", {index, player, depth});

  let result = false;

  if (testLeft(index, player, depth) >= 4) {
    result = true;
  } else if (testRight(index, player, depth) >= 4) {
    result = true;
  }

  return result;
}

function testLeft(index, player, depth) {
  console.log("Left: ", {index, player, depth});
  let left = index - BOARD_COLUMNS - 1;

  if (depth < 4 && board[left] && board[left] === player) {
    return testLeft(left, player, depth + 1);
  } else {
    return depth;
  }
}

function testRight(index, player, depth) {
  console.log("Right: ", {index, player, depth});
  let right = index - BOARD_COLUMNS + 1;

  if (depth < 4 && board[right] && board[right] === player) {
    return testRight(right, player, depth + 1);
  } else {
    return depth;
  }
}

console.log(isConnectFour(27, 2, 1));
