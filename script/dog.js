
function move() {


  interval = setInterval(() => {
    let middle = (playgroundWidth - dogWidth) / 2;
    let end = playgroundWidth - dogWidth

    if (xTranslate >= end) {
      clearInterval(interval);
      smell();   
      setTimeout(jump,1000);
    }


    if (xTranslate >= middle && !stopMiddle) {
      stopMiddle = true;
      clearInterval(interval);
      smell();
      setTimeout (move, 1000);
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
      dog.style.transform = `translate3d(900px, -250px, -150px) scale(3.5)`;
      frameIndex++;
      break;

      case 2:
        dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
        dog.style.width = `${width}px`;
        dog.style.height = `${height}px`;
        dog.style.transform = `translate3d(1010px, 0px, -0px) scale(3.5)`;
        dog.style.zIndex = 0;
        frameIndex++;
        break;

    }
  }, 400);
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


let dog = document.createElement("div");
let playground = document.getElementById("path");
dog.setAttribute("id", "dog");
playground.appendChild(dog);
let interval;
let frameIndex = 0;
let positionX = 0;
let positionY = 0;
let width = 0;
let height = 0;
let playgroundWidth = playground.offsetWidth;
let dogWidth = dog.offsetWidth;
let xTranslate = 0;
let yTranslate = 0;
let zTranslate = 0;
let stopMiddle = false;


move();