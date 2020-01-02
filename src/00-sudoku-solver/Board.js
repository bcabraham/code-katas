const CellGroup = require("./CellGroup");
const Cell = require("./Cell");

class Board {
  constructor(puzzle) {
    this.columns = [];
    this.rows = [];
    this.subBoards = [];

    for (let rowNum = 0; rowNum < puzzle.length; rowNum++) {
      this.rows[rowNum] = this.rows[rowNum] || new CellGroup(rowNum);
      for (let colNum = 0; colNum < puzzle[rowNum].length; colNum++) {
        this.columns[colNum] = this.columns[colNum] || new CellGroup(colNum);

        const subBoardRow = Math.floor(rowNum / 3);
        const subBoardColumn = Math.floor(colNum / 3);

        this.subBoards[subBoardRow][subBoardColumn] =
          this.subBoards[subBoardRow][subBoardColumn] ||
          new CellGroup(parseInt(`${subBoardRow}${subBoardColumn}`));

        const cell = new Cell(
          this.rows[rowNum],
          this.columns[colNum],
          this.subBoards[subBoardRow][subBoardColumn],
          puzzle[rowNum][colNum]
        );

        this.rows[rowNum].push(cell);
        this.columns[colNum].push(cell);
        this.subBoards[subBoardRow][subBoardColumn].push(cell);
      }
    }
  }
}

module.exports = Board;
