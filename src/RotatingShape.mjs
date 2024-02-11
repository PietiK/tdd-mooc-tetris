export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = typeof shape === "string" ? this.shapeToList(shape) : shape;
  }

  toString() {
    return typeof this.shape === "string" ?  this.shape.replace(/[ \t\r]+/g, "") + "\n" :  this.shape.map(row => row.join('')).join('\n') + '\n';
  }

  shapeToList(str) {
    return str
      .replace(/[ \t\r]+/g, "")
      .split("\n")
      .filter((row) => row.length > 0)
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
    const newshape = shapearr.map((arr) => arr.join("")).join("\n");
    return new RotatingShape(newshape);
  }
  rotateLeft() {
    let shapearr = this.shapeToList(this.toString());
    for (let i = 0; i < shapearr.length; i++) {
      for (let j = i; j < shapearr.length; j++) {
        const temp = shapearr[i][j];
        shapearr[i][j] = shapearr[j][i];
        shapearr[j][i] = temp;
      }
    }
    shapearr.reverse();
    const newshape = shapearr.map((arr) => arr.join("")).join("\n");
    return new RotatingShape(newshape);
  }
}
