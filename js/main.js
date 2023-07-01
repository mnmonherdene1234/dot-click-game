import { Dot } from "./dot.js";
import clickedCount from "./clicked-count.js";

const dots = [];

for (let i = 0; i < 20; i++) {
  const dot = Dot.randomPositionDot();
  dots.push(dot);
  document.body.append(dot.element);
}

document.body.append(clickedCount);
