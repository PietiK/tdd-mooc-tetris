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
    for(let i = 0; i<this.height; i++) {
      for(let j = 0; j<this.width; j++) {
        boardstring += "."
      }
      boardstring += "\n"
    }
    return boardstring;
  }
}
