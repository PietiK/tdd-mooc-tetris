export class Board {
  width;
  height;
  cells;
  isMoving;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(height).fill(null).map(() => new Array(width).fill("."));
    this.isMoving = false;
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
    this.isMoving = true;
  }

  hasFalling() {
    return this.isMoving;
  }

  tick() {
    let hasMoved = false;
    this.cells.slice(0, -1).forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell !== "." && !hasMoved) {
          this.isMoving = true;
          this.cells[i + 1][j] = cell;
          this.cells[i][j] = ".";
          hasMoved = true;
        }
      })
    );
    if (!hasMoved) this.isMoving = false;
  }
}
