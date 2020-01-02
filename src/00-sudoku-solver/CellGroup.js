class CellGroup {
  constructor(id) {
    this.id = id;
    this.cells = [];
    this.availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  AddCell(cell) {
    this.cells.push(cell);
    this.availableValues = this.availableValues.filter(val => {
      return val != cell.value;
    });
  }
}

module.exports = CellGroup;
