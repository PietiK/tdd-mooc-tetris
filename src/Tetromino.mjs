import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino extends RotatingShape {
  width;
  height;
  moving;
  constructor(shape, variant = undefined) {
    if (!variant || variant == "T") {
      super(shape);
      this.width = 3;
      this.height = 2;
    } else if (variant === "I") {
      super(shape);
      this.width = 1;
      this.height = 4;
      this.rotateLeft = () =>
        shape[2] === "."
          ? new Tetromino(`..I..\n..I..\n..I..\n..I..\n.....`, "I")
          : new Tetromino(`.....\n.....\nIIII.\n.....\n.....`, "I");
      this.rotateRight = () =>
        shape[2] === "."
          ? new Tetromino(`..I..\n..I..\n..I..\n..I..\n.....`, "I")
          : new Tetromino(`.....\n.....\nIIII.\n.....\n.....`, "I");
    } else if (variant === "O") {
      super(shape);
      this.width = 2;
      this.height = 2;
      this.rotateLeft = () => Tetromino.O_SHAPE;
      this.rotateRight = () => Tetromino.O_SHAPE;
    }
    this.moving = false;
  }

  static get T_SHAPE() {
    return new Tetromino(
      `.T.
       TTT
       ...`,
      "T"
    );
  }

  static get I_SHAPE() {
    return new Tetromino(
      `.....
       .....
       IIII.
       .....
       .....`,
      "I"
    );
  }

  static get O_SHAPE() {
    return new Tetromino(
      `.OO
      .OO
      ...`,
      "O"
    );
  }
}
