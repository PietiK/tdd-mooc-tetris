export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  toString() {
    return this.shape.replace(/[ \t\r]+/g, "") + "\n";
  }

  shapeToList(str) {
    return str
      .replace(/[ \t\r]+/g, "")
      .split("\n")
      .map((row) => row.split(""));
  }
}
