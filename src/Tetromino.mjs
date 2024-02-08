import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino extends RotatingShape {
  constructor(shape, variant = undefined) {
    if (!variant || variant === "T") {
      super(shape);
    } else if (variant === "I") {
      super(shape);
      this.rotateLeft = () => (shape[2] === "." ? new Tetromino(`..I..\n..I..\n..I..\n..I..\n.....`, "I") : new Tetromino(`....\n....\nIIII\n....\n.....`, "I"));
    }
  }

  static get T_SHAPE() {
    return new Tetromino(
      `.T.
       TTT
       ...`,"T"
    );
  }

  static get I_SHAPE() {
    return new Tetromino(
      `.....
       .....
       IIII.
       .....
       .....`,"I"
    );
  }
}
