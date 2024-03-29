import P5 from "p5";
import { world } from "./setup";

export default function draw(p5: P5) {
  p5.background(0, 0, 0);
  world.show();
  world.checkIntersection();
}
