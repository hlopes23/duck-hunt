import {move} from "./duck.js";
import { positionAndSizeDiagonalDuck } from "./duck.js";
import { positionAndSizeTurningDuck } from "./duck.js";
let randomMoves = [
    // cursor: crossair
    { x: -15, y: 10, pos: positionAndSizeDiagonalDuck },
    { x: 0, y: 10, pos: positionAndSizeTurningDuck },
    { x: 15, y: 10, pos: positionAndSizeDiagonalDuck },
    { x: 15, y: 0, pos: positionAndSizeTurningDuck },
    { x: 15, y: -10, pos: positionAndSizeTurningDuck },
    { x: 0, y: -10, pos: positionAndSizeTurningDuck },
    { x: -15, y: -10, pos: positionAndSizeDiagonalDuck },
    { x: -15, y: 0, pos: positionAndSizeDiagonalDuck },
];
export{randomMoves};
export{randomIndex};
let randomIndex = Math.floor(Math.random() * randomMoves.length);
console.log(randomIndex)
move();

function fallingDuck() {
    const duck = document.getElementById("duck") || createDuckElement();
    let frameIndex = 0;
    let posXDiagonalDuck = window.innerWidth - 210 * 2.0;
    let posYDiagonalDuck = 0;
    let movementDirection = 1;
    let positionDuck = [
        { x: -1, y: -238, w: 31, h: 29 },
        { x: -48, y: -237, w: 31, h: 29 },
    ];
    const fallingInterval = setInterval(() => {
        if (frameIndex < positionDuck.length) {
            const currentFrame = positionDuck[frameIndex];
            duck.style.backgroundPosition = `${currentFrame.x}px ${currentFrame.y}px`;
            duck.style.width = `${currentFrame.w}px`;
            duck.style.height = `${currentFrame.h}px`;
            frameIndex++;
            posYDiagonalDuck += 5;
            duck.style.transform = `
                translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px)
                scale(3.5)
                scaleX(${movementDirection > 0 ? "-1" : "1"})
            `;
        } else {
            frameIndex = 1;
        }
        if (posYDiagonalDuck >= window.innerHeight) {
            clearInterval(fallingInterval);
            purpleDuck.style.visibility = "hidden";
        }
    }, 100);
}

function move() {
    const duck = document.getElementById("duck") || createDuckElement();
    let frameIndex = 0;
    let posXDiagonalDuck = window.innerWidth - 210 * 2.0;
    let posYDiagonalDuck = window.innerHeight - 150 * 2.0;
    let movementDirection = 1;
    let currentMove = randomMoves[randomIndex];
    if (duck.addEventListener('click',fallingDuck) ) {
    } else {
        setInterval(() => {
            if (frameIndex < currentMove.pos.length) {
                const currentFrame = currentMove.pos[frameIndex];
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
                    scale(3.5)
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
                } else {
                    duck.style.transform = `
                    translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px)
                    scale(3.5)
                    scaleX(${movementDirection > 0 ? "-1" : "1"})
                `;
                }
            } else {
                frameIndex = 0;
            }
        }, 100);
    }
}