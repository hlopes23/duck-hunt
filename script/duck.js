import { randomMoves } from "./game.js";
import { randomIndex } from "./game.js";

export const positionAndSizeDiagonalDuck = [
	{ x: -134, y: -157, w: 32, h: 31 },
	{ x: -171, y: -158, w: 32, h: 31 },
	{ x: -213, y: -157, w: 32, h: 31 },
];

export const positionAndSizeTurningDuck = [
	{ x: -135, y: -197, w: 32, h: 31 },
	{ x: -171, y: -197, w: 32, h: 31 },
	{ x: -212, y: -198, w: 32, h: 31 },
];

export function createDuckElement() {
	const duck = document.createElement("div");
	duck.id = "duck";
	duck.style.position = "absolute";
	duck.style.background = 'url("../img/sprite.webp") no-repeat';
	duck.style.backgroundPosition = "-134px -157px";
	duck.style.width = "32px";
	duck.style.height = "31px";
	duck.style.transform = "scale(2.0) scaleX(-1)";
	duck.style.transformOrigin = "bottom left";
	duck.style.zIndex = "10";
	document.body.appendChild(duck);
	return duck;
}

let currentFrame;
let interval;
let frameIndex = 0;
let posXDiagonalDuck = window.innerWidth - 210 * 2.0;
let posYDiagonalDuck = window.innerHeight - 150 * 2.0;
let movementDirection = 1;

export function move() {
	const duck = document.getElementById("duck") || createDuckElement();
	let currentMove = randomMoves[randomIndex];

	duck.addEventListener("click", fallingDuck);

	interval = setInterval(() => {
		if (frameIndex < currentMove.pos.length) {
			currentFrame = currentMove.pos[frameIndex];
			duck.style.backgroundPosition = `${currentFrame.x}px ${currentFrame.y}px`;
			frameIndex++;

			posXDiagonalDuck += currentMove.x * movementDirection;
			posYDiagonalDuck += currentMove.y * movementDirection;

			if (
				posXDiagonalDuck <= 0 ||
				posXDiagonalDuck >= window.innerWidth - 32 * 2.0 ||
				posYDiagonalDuck <= 0 ||
				posYDiagonalDuck >= window.innerHeight - 31 * 2.0
			) {
				movementDirection *= -1;

				duck.style.transform = `
                    translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px) 
                    scale(2.0) 
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
			} else {
				duck.style.transform = `
                    translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px) 
                    scale(2.0) 
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
			}
		} else {
			frameIndex = 0;
		}
	}, 100);
}

export function fallingDuck() {
	clearInterval(interval);
	const duck = document.getElementById("duck") || createDuckElement();
	let frameIndex = 0;

	let positionDuck = [
		{ x: -1, y: -238 },
		{ x: -48, y: -237 },
	];

	const fallingInterval = setInterval(() => {
		if (frameIndex < positionDuck.length) {
			const currentFrame = positionDuck[frameIndex];
			duck.style.backgroundPosition = `${currentFrame.x}px ${currentFrame.y}px`;
			frameIndex++;
			posYDiagonalDuck += 5;

			duck.style.transform = `
                translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px) 
                scale(2.0)
            `;
		} else {
			frameIndex = 1;
		}

		if (posYDiagonalDuck >= window.innerHeight) {
			clearInterval(fallingInterval);
			duck.style.visibility = "hidden";
		}
	}, 100);
}
