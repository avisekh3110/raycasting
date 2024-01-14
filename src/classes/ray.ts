import P5, { Vector } from "p5";
import Player from "./player";

export default class Ray {
  private p5: P5;
  private player: Player;
  private direction: Vector;

  constructor(
    p5: P5,
    { player, direction }: { player: Player; direction: Vector }
  ) {
    this.p5 = p5;
    this.player = player;
    this.direction = direction;
  }
  show() {
    this.p5.stroke(255, 255, 255, 50);
    const digonal = this.p5.height * 1.71;
    const towards = this.player.pos
      .copy()
      .add(this.direction.normalize().mult(digonal));
    this.p5.line(this.player.pos.x, this.player.pos.y, towards.x, towards.y);
  }
}
