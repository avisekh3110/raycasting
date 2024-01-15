import P5, { Vector } from "p5";
import { Line } from "../helper/intersection";

export interface wallOption {
  start: Vector;
  end: Vector;
}

export function BoundaryWall(p5: P5) {
  return [
    new Wall(p5, {
      start: p5.createVector(0, 0),
      end: p5.createVector(p5.width, 0),
    }),
    new Wall(p5, {
      start: p5.createVector(p5.width, 0),
      end: p5.createVector(p5.width, p5.height),
    }),
    new Wall(p5, {
      start: p5.createVector(0, p5.height),
      end: p5.createVector(p5.width, p5.height),
    }),
    new Wall(p5, {
      start: p5.createVector(0, 0),
      end: p5.createVector(0, p5.height),
    }),
  ];
}

export default class Wall {
  private p5: P5;
  private start: Vector;
  private end: Vector;

  constructor(p5: P5, { start, end }: wallOption) {
    this.p5 = p5;
    this.start = start;
    this.end = end;
  }

  show() {
    this.p5.stroke(255);
    this.p5.strokeWeight(2);
    this.p5.line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  getline(): Line {
    return {
      start: this.start,
      end: this.end,
    };
  }
}
