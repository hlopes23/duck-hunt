import {move} from "./duck.js";
import { positionAndSizeDiagonalDuck } from "./duck.js";
import { positionAndSizeTurningDuck } from "./duck.js";

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

export let randomIndex = Math.floor(Math.random() * randomMoves.length);
console.log(randomIndex)
let counter = 0;

if( counter == 0 && randomIndex == 4 ||randomIndex == 5 || randomIndex == 6){
    console.log("entrou")
 move();
 counter++;
} else {
    randomIndex;
}



