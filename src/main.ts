import P5 from "p5";
import "./style.css";
import setup from "./setup";
import draw from "./draw";

function sketch(p5: P5) {
  p5.setup = () => {
    //this p5's setup function.
    setup(p5); //this is my setup function from ./setup
  };
  p5.draw = () => {
    //this p5's draw function.
    draw(p5); //this is my setup function from ./setup
  };
}

new P5(sketch);
