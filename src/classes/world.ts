import P5 from "p5";
import Player from "./player";
import Wall, { BoundaryWall } from "./wall";

export default class World {
  private p5: P5;
  public isPaused: boolean;
  private player: Player;
  public walls: Wall[];

  constructor(p5: P5) {
    this.p5 = p5;
    this.isPaused = true;
    this.player = new Player(p5, this);

    this.walls = [...BoundaryWall(p5)];
    // this.walls = [];
    for (let i = 0; i < 8; i++) {
      const newWall = new Wall(p5, {
        start: this.p5.createVector(
          this.p5.random(0, this.p5.height),
          this.p5.random(0, this.p5.width)
        ),
        end: this.p5.createVector(
          this.p5.random(0, this.p5.height),
          this.p5.random(0, this.p5.width)
        ),
      });
      this.walls.push(newWall);
    }
  }

  run() {
    this.isPaused = false;
    this.p5.background(0);
  }
  stop() {
    this.isPaused = true;
  }
  show() {
    this.player.move();
    this.player.show();
    this.walls.forEach((element) => {
      element.show();
    });
  }
  checkIntersection() {
    this.player.checkAll();
  }
}
