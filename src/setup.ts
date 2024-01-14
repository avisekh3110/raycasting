import P5 from "p5";
import World from "./classes/world";

export let world: World;

export default function setup(p5: P5) {
  p5.createCanvas(innerWidth, innerHeight);
  p5.background(0, 0, 0);
  p5.angleMode(p5.DEGREES);
  world = new World(p5);
}
