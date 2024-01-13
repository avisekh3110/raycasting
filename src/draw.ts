import P5 from "p5";

export default function draw(p5: P5) {
  p5.background(0, 0, 0);
  const w = 50;
  const x = p5.mouseX - w / 2;
  const y = p5.mouseY - w / 2;
  p5.rect(x, y, w);
}
