export class Board {
  width;
  height;
  cells;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(height).fill(new Array(width).fill("."));
  }

  toString() {
    return this.cells.map((row) => row.join("")).concat([""]).join("\n");
  }
}
