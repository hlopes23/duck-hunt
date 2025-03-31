import { posXDiagonalDuck } from "./duck.js";
import { posYDiagonalDuck } from "./duck.js";

export function moveDog() {

  interval = setInterval(() => {
    let middle = (playgroundWidth - dogWidth) / 2;
    let end = playgroundWidth - dogWidth

    if (xTranslate >= end) {
      clearInterval(interval);
      smell();   
      setTimeout(jump,1000);
      return;
    }


    if (xTranslate >= middle && !stopMiddle) {
      stopMiddle = true;
      clearInterval(interval);
      smell();
      setTimeout (moveDog, 1000);
      return;
    }


    if (frameIndex < positionsAndSize.length-2){
      positionX = positionsAndSize[frameIndex].x;
      positionY = positionsAndSize[frameIndex].y;
      width = positionsAndSize[frameIndex].w;
      height = positionsAndSize[frameIndex].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      xTranslate += 15;
      dog.style.transform = `translateX(${xTranslate}px) scale(3.5)`;
      frameIndex = (frameIndex + 1) % positionsAndSize.length;
    } else {
      frameIndex = 0;
    }
  }, 70);
}


function smell() {

    let smellCount = 0;
    frameIndex = 3; 

    interval = setInterval( () => {
      positionX = positionsAndSize[frameIndex].x;
      positionY = positionsAndSize[frameIndex].y;
      width = positionsAndSize[frameIndex].w;
      height = positionsAndSize[frameIndex].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      dog.style.transform = `translateX(${xTranslate}px) scale(3.5)`;
      
      frameIndex = (frameIndex === 3) ? 4 : 3;
      smellCount++;

      if(smellCount > 6){
      clearInterval(interval);
    }
}, 140);
}

function jump() {

  dog.classList.add('transition');

  frameIndex = 0;

  interval = setInterval( () => {
    positionX = jumpPositions[frameIndex].x;
    positionY = jumpPositions[frameIndex].y;
    width = jumpPositions[frameIndex].w;
    height = jumpPositions[frameIndex].h;

    switch (frameIndex) {

      case 0:
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      frameIndex++;
      break;

      case 1:
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      dog.style.transform = `translate3d(900px, ${-herbsHeight}px, -150px) scale(3.5)`;
      frameIndex++;
      break;

      case 2:
        dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
        dog.style.width = `${width}px`;
        dog.style.height = `${height}px`;
        dog.style.transform = `translate3d(1010px, 0px, -0px) scale(3.5)`;
        dog.style.zIndex = 0;
        clearInterval(interval);
        break;
    }
  }, 300);
}

export function catchDuck() {
 
  xTranslate = posXDiagonalDuck ?? 0;
  dog.style.left = `${xTranslate}px`; 

  interval = setTimeout( () => {
  dog.classList.add('dogWithDuck');
  dog.style.backgroundPosition = `${catchDuckPositions[0].x}px ${catchDuckPositions[0].y}px`;
  dog.style.width = `${catchDuckPositions[0].w}px`;
  dog.style.height = `${catchDuckPositions[0].h}px`;
  
}, 100);
}



// -- variables -- 

let positionsAndSize = [
  { x: -5, y: -1, w: 55, h: 43 },
  { x: -66, y: -1, w: 55, h: 43 },
  { x: -126, y: -1, w: 55, h: 43 },
  { x: -184, y: -1, w: 55, h: 43 },
  { x: -245, y: -1, w: 55, h: 43 }, // smell
];

let jumpPositions = [
  { x: -5, y: -59, w: 55, h: 50 }, 
  { x: -74, y: -60, w: 55, h: 50 }, 
  { x: -135, y: -67, w: 55, h: 50 }
];

let catchDuckPositions = [
  { x: -332, y: -3, w: 55, h: 50 }, //1 duck
  { x: -319, y: -69, w: 55, h: 50 }, // 2 ducks
]


let herbs = document.getElementById('herbs');
export let herbsHeight = herbs.offsetHeight;
let dog = document.createElement("div");
let playground = document.getElementById("path");
dog.setAttribute("id", "dog");
playground.appendChild(dog);
let interval;
export let footerHeight = document.querySelector('footer').offsetHeight;
let frameIndex = 0;
let positionX = 0;
let positionY = 0;
let width = 0;
let height = 0;
let playgroundWidth = playground.offsetWidth;
let dogWidth = dog.offsetWidth;
let xTranslate = 0;
let stopMiddle = false;