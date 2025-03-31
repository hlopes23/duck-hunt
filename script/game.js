import { moveDuck } from "./duck.js";
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

export function randomindexduck(){
	return randomIndex = Math.floor(Math.random() * randomMoves.length);
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
}

function nextRound () {
    if(killedDucks == 10) {
        numberOfRounds ++;
		killedDucks = 0;
    }
}

let counter = 0;
let numberOfRounds = 1;
export let killedDucks = 0;
export let randomIndex; 


moveDog();
rounds();
nextRound();
setTimeout(barkingSound, 6500);
setTimeout(startDuck, 9000);
