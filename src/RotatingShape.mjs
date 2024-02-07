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
  rotateRight() {
    let shapearr = this.shapeToList(this.toString());
    for (let i = 0; i < shapearr.length; i++) {
      for (let j = i; j < shapearr.length; j++) {
        const temp = shapearr[i][j];
        shapearr[i][j] = shapearr[j][i];
        shapearr[j][i] = temp;
      }
      shapearr[i].reverse();
    }
    return shapearr.map((arr) => arr.join("")).join("\n");
  }
}
