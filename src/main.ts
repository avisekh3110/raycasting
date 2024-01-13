import P5 from "p5";
import "./style.css";
import setup from "./setup";
import draw from "./draw";

function sketch(p5: P5) {
  p5.setup = () => {
    setup(p5);
  };
  p5.draw = () => {
    draw(p5);
  };
}

new P5(sketch);
