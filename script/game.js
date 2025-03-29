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
console.log(randomIndex)
let counter = 0;

function startDuck() {

	randomIndex = Math.floor(Math.random() * randomMoves.length);

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

setTimeout(barkingSound, 6500);
moveDog();
setTimeout(startDuck, 9000);
