const methods = require("./index");
const {whoIsWinner} = require("./src/18-connect-four/ideas");

// console.log(
//   methods.connect_four.whoIsWinner([
//     "A_Red",
//     "A_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "C_Red",
//     "C_Yellow",
//     "D_Red",
//     "D_Yellow"
//   ])
// );

console.log(
  methods.connect_four.whoIsWinner([
    "A_Red",
    "B_Yellow",
    "B_Red",
    "C_Yellow",
    "D_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "D_Red",
    "E_Yellow",
    "D_Red"
  ])
);

// console.log(
//   methods.connect_four.whoIsWinner([
//     "A_Red",
//     "B_Yellow",
//     "A_Red",
//     "C_Yellow",
//     "A_Red",
//     "C_Yellow",
//     "A_Red",
//     "D_Yellow",
//     "D_Red",
//     "E_Yellow",
//     "D_Red"
//   ])
// );

// console.log(
//   methods.connect_four.whoIsWinner([
//     "D_Red",
//     "C_Yellow",
//     "C_Red",
//     "B_Yellow",
//     "B_Red",
//     "A_Yellow",
//     "B_Red",
//     "A_Yellow",
//     "A_Red",
//     "E_Yellow",
//     "A_Red"
//   ])
// );

// console.log(
//   methods.connect_four.whoIsWinner([
//     "C_Red",
//     "C_Yellow",
//     "F_Red",
//     "A_Yellow",
//     "A_Red",
//     "B_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "G_Red",
//     "D_Yellow",
//     "D_Red",
//     "E_Yellow",
//     "B_Red",
//     "G_Yellow",
//     "C_Red",
//     "D_Yellow",
//     "F_Red",
//     "C_Yellow",
//     "G_Red",
//     "B_Yellow",
//     "A_Red",
//     "A_Yellow",
//     "A_Red",
//     "G_Yellow",
//     "D_Red",
//     "F_Yellow",
//     "D_Red",
//     "F_Yellow",
//     "B_Red"
//   ])
// );
