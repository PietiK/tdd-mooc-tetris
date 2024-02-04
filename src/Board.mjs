export class Board {
  width;
  height;
  cells;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(height).fill(null).map(() => new Array(width).fill("."));
  }

  toString() {
    let boardstring = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        boardstring += this.cells[i][j];
      }
      boardstring += "\n";
    }
    return boardstring;
  }

  drop(block) {
    if (this.cells.some(row => row.some(cell => cell !== "."))) {
      throw new Error("already falling");
    }
    this.cells[0][1] = block;
  }
  
  hasFalling() {
    return this.cells.some(row => row.some(cell => cell !== "."));
  }

  tick() {
    const tempArr = this.cells;
    for (let i = this.height - 2; i >= 0; i--) {
      for (let j = 0; j < this.width; j++) {
        if (tempArr[i][j] !== ".") tempArr[i + 1][j] = tempArr[i][j];
        tempArr[i][j] = ".";
      }
    } 
    this.cells = tempArr;
  }
}
