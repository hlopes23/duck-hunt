let frameIndex = 0;
let positionX = 0;
const frameWidth = 34;
const totalFrames = 3;
const duck = document.getElementById("image");
let windowWidth = window.innerWidth;
let movingInterval;

function moveHorizontal() {
    movingInterval = setInterval(() => {
    frameIndex = (frameIndex + 1) % totalFrames;
    let posX = -frameIndex * frameWidth;
    duck.style.backgroundPosition = `${posX}px -121px`;

    positionX += 5;
    duck.style.transform = `translateX(${positionX}px)`;

    if (positionX >= windowWidth) {
      clearInterval(interval);
      positionX = windowWidth;

      let reverseInterval = setInterval(() => {
        frameIndex = (frameIndex + 1) % totalFrames;
        let posX = -frameIndex * frameWidth;
        duck.style.backgroundPosition = `${posX}px -121px`;

        positionX -= 5;
        duck.style.transform = `translateX(${positionX}px) scale(-1,1)`;
      }, 250);
    }
  }, 150);
}
moveHorizontal();


let positionY = 0;
let fallingDuckPositionX = 0;

function fallingDuck() {
    let interval = setInterval(() => {
        clearInterval(movingInterval);

        duck.style.backgroundPosition = `-1px -238px`;
        duck.style.backgroundPosition = `-48px -237px`;

        positionY += 5;
        duck.style.transform = `translate(${positionX}px, ${positionY}px)`;

        if(positionY === window.innerHeight) {
            clearInterval(interval);
            duck.style.visibility = "hidden";
        }
}, 40)}

duck.addEventListener("click", fallingDuck);