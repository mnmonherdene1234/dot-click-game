import { balloonPop } from "./sounds.js";
import { getRandomInt } from "./helpers.js";
import data from "./data.js";

export class Dot {
    constructor(x, y, width = "1vw", height = "1vw", color = "black") {
        this.element = document.createElement("div");

        this.element.style.width = width;
        this.element.style.height = height;
        this.element.style.backgroundColor = color;
        this.element.style.borderRadius = "100rem";
        this.element.style.position = "absolute";
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;

        this.element.onclick = () => {
            this.element.remove();
            balloonPop.play();
            data.clicked++;
        };
    }

    static randomPositionDot() {
        const width = window.innerWidth - 60;
        const height = window.innerHeight - 60;

        const x = getRandomInt(0, width);
        const y = getRandomInt(0, height);

        return new Dot(x, y);
    }
}
