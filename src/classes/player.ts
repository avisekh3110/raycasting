import P5, { Vector } from "p5";
import Ray from "./ray";

export default class Player {
  private p5: P5;
  public pos: Vector;
  public size: number;
  public color: number;
  private rays: Ray[];

  constructor(p5: P5) {
    this.p5 = p5;
    this.pos = this.p5.createVector(0, 0);
    this.size = 20;
    this.color = 255;
    this.rays = [];
    for (let i = 0; i < 360; i += 5) {
      const direction = Vector.fromAngle((i * this.p5.PI) / 180);
      const ray = new Ray(p5, { player: this, direction: direction });
      this.rays.push(ray);
    }
  }
  show() {
    this.p5.fill(this.color);
    this.p5.circle(this.pos.x, this.pos.y, this.size);
    this.rays.forEach((element: Ray) => {
      element.show();
    });
  }
  move() {
    this.pos = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
  }
}
