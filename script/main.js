
//      { x: -245, y: -1, w: 55, h: 43 }, smell

let positionsAndSize = [
  { x: -5, y: -1, w: 55, h: 43 },
  { x: -66, y: -1, w: 55, h: 43 },
  { x: -126, y: -1, w: 55, h: 43 },
  { x: -184, y: -1, w: 55, h: 43 },
  { x: -245, y: -1, w: 55, h: 43 },
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
let xTranslate = 0;
let stopMiddle = false;

function moveX() {
  interval = setInterval(() => {
    let middle = (playgroundWidth - dog.offsetWidth) / 2;
    let end = playgroundWidth - dog.offsetWidth;


    if (xTranslate >= end) {
      clearInterval(interval);
      return;
    }


    if (xTranslate >= middle && !stopMiddle) {
      stopMiddle = true;
      clearInterval(interval);
      smell();
    }


    if (frameIndex < positionsAndSize.length - 1) {
      positionX = positionsAndSize[frameIndex].x;
      positionY = positionsAndSize[frameIndex].y;
      width = positionsAndSize[frameIndex].w;
      height = positionsAndSize[frameIndex].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      xTranslate += 15;
      dog.style.transform = `translateX(${xTranslate}px) scale(3)`;
      frameIndex = (frameIndex + 1) % positionsAndSize.length;
    } else {
      frameIndex = 0;
    }
  }, 70);
}





function smell() {

    let smellCount = 0;
    let i = 3; 

    
    interval = setInterval(() => {
        positionX = positionsAndSize[i].x;
        positionY = positionsAndSize[i].y;
        width = positionsAndSize[i].w;
      height = positionsAndSize[i].h;
      dog.style.backgroundPosition = `${positionX}px ${positionY}px`;
      dog.style.width = `${width}px`;
      dog.style.height = `${height}px`;
      dog.style.transform = `translateX(${xTranslate}px) scale(3)`;
      
    
      i = (i === 3) ? 4 : 3;
      smellCount++;

      if(smellCount > 6){
      clearInterval(interval);
    }
}, 160);

}

dog.addEventListener("click", () => {
  clearInterval(interval);
});


moveX();
