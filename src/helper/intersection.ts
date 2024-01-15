import P5, { Vector } from "p5";

export interface Line {
  start: Vector;
  end: Vector;
}

export default function intersection(wallLine: Line, rayLine: Line) {
  const x1 = wallLine.start.x;
  const y1 = wallLine.start.y;
  const x2 = wallLine.end.x;
  const y2 = wallLine.end.y;
  const x3 = rayLine.start.x;
  const y3 = rayLine.start.y;
  const x4 = rayLine.end.x;
  const y4 = rayLine.end.y;

  const t =
    ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
  const u =
    ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));

  if (0 <= t && t <= 1 && 0 <= u) {
    const px = x1 + t * (x2 - x1);
    const py = y1 + t * (y2 - y1);
    // p5.point(px, py);
    return new Vector(px, py);
  } else {
    return false;
  }
}
