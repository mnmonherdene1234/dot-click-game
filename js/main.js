import { Dot } from "./dot.js";
import clickedCount from "./clicked-count.js";
import data from "./data.js";

const dots = [];

for (let i = 0; i < 10; i++) {
  const dot = Dot.randomPositionDot();
  dots.push(dot);
  document.body.append(dot.element);
}

document.body.append(clickedCount);