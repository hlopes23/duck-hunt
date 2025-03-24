const positionAndSizePurpleHorizontalDuck = [{ x: 0, y: -121, w: 34, h: 24 }, { x: -40, y: -123, w: 34, h: 24 }, { x: -81, y: -119, w: 34, h: 24 }];
const purpleDuck = document.getElementById("purpleHorizontalDuck");
let horizontalMoveInterval;
let frameIndex = 0;
let positionX = 0;
let positionY = 0;
let width = 0;
let height = 0;
let posX = 0;

function purpleDuckHorizontalMove() {
    horizontalMoveInterval = setInterval(() => {
        if (frameIndex < positionAndSizePurpleHorizontalDuck.length) {
            positionX = positionAndSizePurpleHorizontalDuck[frameIndex].x;
            positionY = positionAndSizePurpleHorizontalDuck[frameIndex].y;
            width = positionAndSizePurpleHorizontalDuck[frameIndex].w;
            height = positionAndSizePurpleHorizontalDuck[frameIndex].h;
            purpleDuck.style.backgroundPosition = `${positionX}px ${positionY}px`;
            purpleDuck.style.width = `${width}px`;
            purpleDuck.style.height = `${height}px`;
            frameIndex++

            posX += 10;
            purpleDuck.style.transform = `translateX(${posX}px)`;
        }
        else {
            frameIndex = 0;
        }

        if(posX >= window.innerWidth) {
            clearInterval(horizontalMoveInterval);
            purpleDuck.style.visibility = "hidden";
        }
    }, 100);
}


let positionAndSizePurpleFallingDuck = [{x: -1, y: -238, w:31, h:29}, {x: -48, y: -237, w:31, h:29}];
let fallingInterval;
let posY = 0;

function fallingDuck() {
    clearInterval(horizontalMoveInterval);

    fallingInterval = setInterval(() => {
        if(frameIndex < positionAndSizePurpleFallingDuck.length) {
            positionX = positionAndSizePurpleFallingDuck[frameIndex].x;
            positionY = positionAndSizePurpleFallingDuck[frameIndex].y;
            width = positionAndSizePurpleFallingDuck[frameIndex].w;
            height = positionAndSizePurpleFallingDuck[frameIndex].h;
            purpleDuck.style.backgroundPosition = `${positionX}px ${positionY}px`;
            purpleDuck.style.width = `${width}px`;
            purpleDuck.style.height = `${height}px`;
            frameIndex++

            posY += 5;
            purpleDuck.style.transform = `translate(${posX}px, ${posY}px)`;
        } else {
            frameIndex = 1;
        }

        if(posY >= window.innerHeight) {
            clearInterval(fallingInterval);
            purpleDuck.style.visibility = "hidden";
        }
    }, 20)
}

purpleDuck.addEventListener("click", fallingDuck);

let positionAndSizeDiagonalDuck = [{x: -134, y: -157, w:32, h:31}, {x: -171, y: -158, w:32, h:31}, {x: -213, y: -157, w:32, h:31}];
let positionAndSizeTurningDuck = [{x: -135, y: -197, w:32, h:31}, {x: -171, y: -197, w:32, h:31}, {x: -212, y: -198, w:32, h:31}];
let diagonalInterval;
let turningInterval;
let posXDiagonalDuck = 0;
let posYDiagonalDuck = 0;
const diagonalDuck = document.getElementById("duck");

function turningDuck () {
    diagonalInterval = setInterval(() => {
        if(frameIndex < positionAndSizeDiagonalDuck.length) {
            positionX = positionAndSizeDiagonalDuck[frameIndex].x;
            positionY =  positionAndSizeDiagonalDuck[frameIndex].y;
            width =  positionAndSizeDiagonalDuck[frameIndex].w;
            height =  positionAndSizeDiagonalDuck[frameIndex].h;
            diagonalDuck.style.backgroundPosition = `${positionX}px ${positionY}px`;
            diagonalDuck.style.width = `${width}px`;
            diagonalDuck.style.height = `${height}px`;
            frameIndex++;

            posXDiagonalDuck += 15;
            posYDiagonalDuck += 5;
            diagonalDuck.style.transform = `translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px)`;
        } else {
            frameIndex = 0;
        }

        if(posXDiagonalDuck >= window.innerWidth || posYDiagonalDuck >= window.innerHeight) {
            clearInterval(diagonalInterval);
            turningInterval = setInterval(() => {
                if(frameIndex < positionAndSizeTurningDuck.length) {
                    positionX = positionAndSizeTurningDuck[frameIndex].x;
                    positionY = positionAndSizeTurningDuck[frameIndex].y;
                    width = positionAndSizeTurningDuck[frameIndex].w;
                    height = positionAndSizeTurningDuck[frameIndex].h;
                    diagonalDuck.style.backgroundPosition =  `${positionX}px ${positionY}px`;
                    diagonalDuck.style.width = `${width}px`;
                    diagonalDuck.style.height = `${height}px`;
                    frameIndex++;
                    
                    posXDiagonalDuck -= 15;
                    posYDiagonalDuck -= 5;
                    diagonalDuck.style.transform = `translate(${posXDiagonalDuck}px, ${posYDiagonalDuck}px)`;

                } else {
                    frameIndex = 0;
                }
            },200)
        }
    }, 100)
}
turningDuck();





























