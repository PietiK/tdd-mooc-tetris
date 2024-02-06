export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  toString() {
    return this.shape.replace(/[ \t\r]+/g, "") + "\n";
  }
}
