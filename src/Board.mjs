export class Board {
  width;
  height;
  cells;
  isMoving;
  middle;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(height).fill(null).map(() => new Array(width).fill("."));
    this.isMoving = false;
    this.middle = Math.floor(width / 2);
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
    const blockHeight = block.height;
    const blockWidth = block.width;
    this.isMoving = true;
    if(!blockHeight || !blockWidth) {
      this.cells[0][this.middle] = block;
      return;
    }
    for (let i = 0; i < blockHeight; i++) { 
      for (let j = 0; j < blockWidth; j++) {
        this.cells[i][this.middle + j - Math.ceil(blockWidth / 2)] = block.shape[i][j];
      }
    }
  }

  hasFalling() {
    return this.isMoving;
  }

  tick() {
    let hasMoved = false;
    this.cells.slice(0, -1).forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell !== "." && !hasMoved && this.cells[i + 1][j] === ".") {
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
