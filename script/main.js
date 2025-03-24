
//      { x: -245, y: -1, w: 55, h: 43 }, smell

let positionsAndSize = [
  { x: -5, y: -1, w: 55, h: 43 },
  { x: -66, y: -1, w: 55, h: 43 },
  { x: -126, y: -1, w: 55, h: 43 },
  { x: -184, y: -1, w: 55, h: 43 },
  { x: -245, y: -1, w: 55, h: 43 },
  { x: -5, y: -59, w: 55, h: 50 },
  { x: -74, y: 60, w: 40, h: 46 },
  { x: -135, y: 67, w: 32, h: 32 },
];


const dog = document.getElementById("dog");
const playground = document.getElementById("passeio");
let interval;
let frameIndex = 0;
let positionX = 0;
let positionY = 0;
let width = 0;
let height = 0;
let playgroundWidth = playground.offsetWidth;
let dogWidth = dog.offsetWidth;
let xTranslate = 0;
let stopMiddle = false;



function moveX() {


  interval = setInterval(() => {
    let middle = (playgroundWidth - dogWidth) / 2;
    let end = playgroundWidth - dogWidth

    if (xTranslate >= end) {

      clearInterval(interval);
      smell();
      return;
    }


    if (xTranslate >= middle && !stopMiddle) {
      stopMiddle = true;
      clearInterval(interval);
      smell();
      setTimeout (moveX, 1000);
      return;
    }


    if (frameIndex < 4){
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
    let i = 3; 

    interval = setInterval( () => {
        positionX = positionsAndSize[i].x;
        positionY = positionsAndSize[i].y;
        width = positionsAndSize[i].w;
      height = positionsAndSize[i].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      dog.style.transform = `translateX(${xTranslate}px) scale(3.5)`;
      
    
      i = (i === 3) ? 4 : 3;
      smellCount++;

      if(smellCount > 6){
      clearInterval(interval);
      return;
    }
}, 140);
}


function jump(){

    let i = 5;
    interval = setInterval( () => {
        positionX = positionsAndSize[i].x;
        positionY = positionsAndSize[i].y;
        width = positionsAndSize[i].w;
      height = positionsAndSize[i].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      xTranslate += 15;
      dog.style.transform = `translateX(${xTranslate}px) scale(3.5)`;

      i = (i === 5) ? 6 : (i === 6) ? 7 : 5;
}, 70);
}


dog.addEventListener("click", () => {
  clearInterval(interval);
});


moveX();
