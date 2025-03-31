import {moveDuck} from "./duck.js";
import { positionAndSizeDiagonalDuck } from "./duck.js";
import { positionAndSizeTurningDuck } from "./duck.js";
import { moveDog } from "./dog.js";



export let randomMoves = [
	{ x: -15, y: 10, pos: positionAndSizeDiagonalDuck },
	{ x: 0, y: 10, pos: positionAndSizeTurningDuck },
	{ x: 15, y: 10, pos: positionAndSizeDiagonalDuck },
	{ x: 15, y: 0, pos: positionAndSizeTurningDuck },
	{ x: 15, y: -10, pos: positionAndSizeTurningDuck },
	{ x: 0, y: -10, pos: positionAndSizeTurningDuck },
	{ x: -15, y: -10, pos: positionAndSizeDiagonalDuck },
	{ x: -15, y: 0, pos: positionAndSizeDiagonalDuck },
];

export let randomIndex; 

let counter = 0;

export function randomindexduck(){
    randomIndex = Math.floor(Math.random() * randomMoves.length);
}

export function startDuck() {

	randomindexduck();

if( counter == 0 && randomIndex == 4 || randomIndex == 5 || randomIndex == 6){
 moveDuck();
 counter++;
} else {
    startDuck();
}
}

function barkingSound () {
	let music = document.getElementById("barking");
	music.play();
}


function rounds () {
    const points = document.getElementById("numberOfRounds");
    points.textContent = `${numberOfRounds}`;
    points.style.fontSize="16px";
    points.style.color = "green";
    points.style.fontWeight = "bold";
}
function nextRound () {
    if(killedDucks == 10) {
        numberOfRounds ++;
    }
}
let numberOfRounds = 1;
let killedDucks = 0;

let typesOfGame = document.querySelectorAll(".game");
let currentGameIndex = 0;
updatePointerVisibility();

typesOfGame.forEach(function (gameDiv) {
	let row = gameDiv.closest(".row");
	let pointer = row.querySelector(".pointer");

	gameDiv.addEventListener("mouseover", function () {
		currentGameIndex = Array.from(typesOfGame).indexOf(gameDiv);
		updatePointerVisibility();
	});

	gameDiv.addEventListener("mouseout", function () {
		updatePointerVisibility();
	});
});

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowUp":
			if (currentGameIndex > 0) {
				currentGameIndex--;
				updatePointerVisibility();
			}
			break;
		case "ArrowDown":
			if (currentGameIndex < typesOfGame.length - 1) {
				currentGameIndex++;
				updatePointerVisibility();
			}
			break;
		case "Enter":
			typesOfGame[currentGameIndex].click();
			break;
	}
});

function updatePointerVisibility() {
	document.querySelectorAll(".pointer").forEach((pointer) => {
		pointer.style.visibility = "hidden";
	});

	let currentRow = typesOfGame[currentGameIndex].closest(".row");
	let currentPointer = currentRow.querySelector(".pointer");
	currentPointer.style.visibility = "visible";
}



rounds();
nextRound();
setTimeout(barkingSound, 6500);
moveDog();
setTimeout(startDuck, 9000);
