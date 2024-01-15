import P5, { Vector } from "p5";
import Player from "./player";
import World from "./world";
import intersection, { Line } from "../helper/intersection";

export default class Ray {
  private p5: P5;
  private player: Player;
  private direction: Vector;
  private world: World;

  constructor(
    p5: P5,
    { player, direction }: { player: Player; direction: Vector },
    world: World
  ) {
    this.world = world;
    this.p5 = p5;
    this.player = player;
    this.direction = direction.normalize();
  }
  show() {
    this.p5.stroke(255, 255, 255, 50);
    this.p5.strokeWeight(1);
    const towards = this.player.pos.copy().add(this.direction);
    this.p5.line(this.player.pos.x, this.player.pos.y, towards.x, towards.y);
  }
  getline(): Line {
    return {
      start: this.player.pos,
      end: this.player.pos.copy().add(this.direction),
    };
  }
  checkIntersection(): Vector | null {
    let point: Vector | null = null;
    let distance: number = Infinity;
    this.world.walls.forEach((element) => {
      this.p5.strokeWeight(2);
      this.p5.stroke(255);
      // this.p5.point(element.getline().start);
      // this.p5.point(element.getline().end);
      this.p5.point(this.getline().end);
      const check = intersection(element.getline(), this.getline(), this.p5);
      if (check != false) {
        const currentDistance = check.copy().sub(this.player.pos).mag();
        if (currentDistance < distance) {
          distance = currentDistance;
          point = check;
        }
      }
    });
    return point;
  }
}
