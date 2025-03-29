import { randomMoves } from "./game.js";
import { catchDuck, herbsHeight } from "./dog.js";
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
	document.body.appendChild(duck);
	return duck;
}


function redDuck() {
    const duckIcon = document.querySelectorAll(".icon");
    for (let ducks of duckIcon) {
        if(ducks.src !== "/img/redDuck.png") {
            ducks.src = "/img/redDuck.png";
            break;
        }
    }
}

function shots() {
    numberOfShots--;
    const bullet = document.querySelectorAll(".bullet");
    for(let bullets of bullet) {
        if(bullets.style.visibility != "hidden") {
            bullets.style.visibility = "hidden";
            break;
        }
    }
}

function score() {
    scoreNumber += 500;
    let points = document.querySelector(".scoreElement");
    points.style.fontSize = "24px";
    points.style.fontWeight = "bold";
    points.style.color = "white";
    points.textContent = `${scoreNumber}`;
}

document.addEventListener("click", failedShots);

function failedShots() {
    shots();
    if (numberOfShots <= 0) {
		freezeGame();
        const gameOver = document.createElement("div");
        gameOver.textContent = "GAME OVER";
        gameOver.style.color = "red";
        gameOver.style.position = "absolute";
        gameOver.style.top = "50%";
        gameOver.style.left = "40%";
        gameOver.style.fontSize = "50px"
        document.body.appendChild(gameOver);
    }
}

function freezeGame () {
	document.removeEventListener("click", failedShots);
	clearInterval(interval);

	duck.style.animationPlayState = "paused";
}



export function moveDuck() {
	const duck = document.getElementById("duck") || createDuckElement();
	let currentMove = randomMoves[randomIndex];


	duck.addEventListener("click", () => {
		hitDuck = true;
        fallingDuck(),
            redDuck(),
            score()
    }
    );

	interval = setInterval(() => {
		if (frameIndex < currentMove.pos.length  ) {
			currentFrame = currentMove.pos[frameIndex];
			duck.style.backgroundPosition = `${currentFrame.x}px ${currentFrame.y}px`;
			frameIndex++;

			posXDiagonalDuck += currentMove.x * movementDirection;
			posYDiagonalDuck += currentMove.y * movementDirection;

			if (
				posXDiagonalDuck <= 0 ||
				posXDiagonalDuck >= window.innerWidth - 32 * 2.0 ||
				posYDiagonalDuck <= 0 && posYDiagonalDuck >= herbsHeight ||
				posYDiagonalDuck >= window.innerHeight - 31 * 2.0
			) {
				movementDirection *= -1;

				duck.style.transform = `
                    translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px) 
                    scale(3.0) 
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
			} else {
				duck.style.transform = `
                    translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px) 
                    scale(3.0) 
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
			}
		} else {
			frameIndex = 0;
		}
	}, 80);
}

export function fallingDuck() {
	clearInterval(interval);
	const duck = document.getElementById("duck") || createDuckElement();
	let frameIndex = 0;
	console.log("morreu");
	let positionDuck = [
		{ x: -1, y: -238 },
		{ x: -48, y: -237 },
	];

	const fallingInterval = setInterval(() => {
		if (frameIndex < positionDuck.length) {
			const currentFrame = positionDuck[frameIndex];
			duck.style.backgroundPosition = `${currentFrame.x}px ${currentFrame.y}px`;
			frameIndex++;
			posYDiagonalDuck += 15;
			duck.style.zIndex = "0";
			duck.style.transform = `
                translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px)
                scale(3.0)
            `;
		} else {
			frameIndex = 1;
		}

		if (posYDiagonalDuck >= window.innerHeight) {
			clearInterval(fallingInterval);
			duck.style.visibility = "hidden";
			catchDuck();
		}
	}, 25);
}


let hitDuck = false;
let currentFrame;
let interval;
let frameIndex = 0;
export let posXDiagonalDuck = window.innerWidth - 210 * 2.0;
export let posYDiagonalDuck = window.innerHeight - 150 * 2.0;
let movementDirection = 1;
let scoreNumber = 0;
let numberOfShots = 3;
