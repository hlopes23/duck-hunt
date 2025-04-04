import { randomMoves, startDuck } from "./game.js";
import { catchDuck } from "./dog.js";
import { randomIndex } from "./game.js";
import { randomindexduck } from "./game.js";
import { killedDucks } from "./game.js";

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
		let duckIcon = document.querySelectorAll(".icon");

	
		for (let i = 0; i < duckIcon.length; i++) {
			if (!duckIcon[i].src.includes("/img/redDuck.png")) { 
				duckIcon[i].src = "/img/redDuck.png";
				duckKill++; 
				return; 
			}
		}
	}

function shots() {
    numberOfShots--;
    const bullet = document.querySelectorAll(".bullet");
    for (let bullets of bullet) {
        if (bullets.style.visibility != "hidden") {
            bullets.style.visibility = "hidden";
            break;
        } 
    }
	
    if (hitDuck) {
        bullet.forEach(bullet => {
            bullet.style.visibility = "visible";
        });
		redDuck();
    }
}

function score() {
	scoreNumber += 500;
	let points = document.querySelector(".points");
	points.style.fontSize = "24px";
	points.style.fontWeight = "bold";
	points.style.color = "white";
	points.textContent = `${scoreNumber}`;

	document.body.appendChild(score);
}

function shotSound() {
	let music = document.getElementById("shotSound");
	music.play();
}

function duckCaughtSound() {
	let music = document.getElementById("duckCaught");
	music.play();
}

function duckFallingSound() {
	let music = document.getElementById("deadDuckFalling");
	music.play();
}

function flappingSound() {
	let music = document.getElementById("flappingSound");
	music.play();
}

document.addEventListener("click", () => { 
	shotSound();
	gameOver();
});

function gameOver() {
	shots();
	if (numberOfShots <= 0) {
		freezeGame();
		const gameOver = document.createElement("div");
		gameOver.textContent = "GAME OVER";
		gameOver.style.color = "red";
		gameOver.style.position = "absolute";
		gameOver.style.top = "50%";
		gameOver.style.left = "40%";
		gameOver.style.fontSize = "50px";
		document.body.appendChild(gameOver);
	}
}

function freezeGame() {
	document.removeEventListener("click", failedShots());
	clearInterval(interval);

	duck.style.animationPlayState = "paused";
}

export function moveDuck() {
	const duck = document.getElementById("duck") || createDuckElement();
	let currentMove = randomMoves[randomIndex];
	chooseduckMove();
	flappingSound();

		
	if (killedDucks >= 9 && !duckIcon[0].src.includes("/img/duckIcon.png")) {
		duckIcon.forEach(duck => duck.src = "/img/duckIcon.png");
	}

	duck.addEventListener("click", () => {
		hitDuck = true
		fallingDuck(),
		score(),
		shotSound(),
		duckFallingSound()
	});

	interval = setInterval(() => {
		if (frameIndex < currentMove.pos.length) {
			currentFrame = currentMove.pos[frameIndex];
			currentMove = randomMoves[randomIndex];
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
				setTimeout(randomindexduck, 7000);

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

	let positionDuck = [
		{ x: -131, y: -238 },
		{ x: -178, y: -237 },
	];

	duck.style.backgroundPosition = `${positionDuck[0].x}px ${positionDuck[0].y}px`;

	const fallingInterval = setInterval(() => {
		if (frameIndex < positionDuck.length) {
			const currentFrame = positionDuck[1];
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
			setTimeout(duckCaughtSound(), 1000);
			document.body.removeChild(duck);
			hitDuck = false;
			posXDiagonalDuck = window.innerWidth - 210 * 2.0;
			posYDiagonalDuck = window.innerHeight - 150 * 2.0;
			dog.classList.remove("dogWithDuck");
			setTimeout(startDuck, 2000);
		}
	}, 25);
}


function chooseduckMove() {
	let random1stMove = Math.round(Math.random());
	if (random1stMove == 1) {
		posXDiagonalDuck = window.innerWidth - 210 * 2.0;
	} else {
		posXDiagonalDuck = window.innerWidth - 800 * 2.0;
	}
}

let hitDuck = false;
let currentFrame;
let interval;
let frameIndex = 0;
export let posXDiagonalDuck = 0;
export let posYDiagonalDuck = window.innerHeight - 150 * 2.0;
let movementDirection = 2;
let scoreNumber = 0;
let numberOfShots = 3;