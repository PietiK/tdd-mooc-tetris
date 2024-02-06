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
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
    this.cells[0][1] = block;
  }

  hasFalling() {
    return this.cells.some(row => row.some(cell => cell !== "."));
  }

  tick() {
    let hasMoved = false;
    this.cells.slice(0, -1).forEach((row, i) => 
      row.forEach((cell, j) => {
        if (cell !== "." && !hasMoved) {
          this.cells[i + 1][j] = cell;
          this.cells[i][j] = ".";
          hasMoved = true;
        }
      })
    );
  }
}
