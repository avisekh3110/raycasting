import P5 from "p5";
import "./style.css";
import setup from "./setup";
import draw from "./draw";

function sketch(p5: P5) {
  //this p5's setup function.
  p5.setup = () => {
    setup(p5); //this is my setup function from ./setup
  };
  //this p5's draw function.
  p5.draw = () => {
    draw(p5); //this is my draw function from ./draw
  };
}

new P5(sketch);
