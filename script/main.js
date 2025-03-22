let typesOfGame = document.querySelectorAll(".game");
let currentGameIndex = 0;

updatePointerVisibility();

typesOfGame.forEach(function (gameDiv) {
	let row = gameDiv.closest(".row");
	let pointer = row.querySelector(".pointer");

	gameDiv.addEventListener("mouseover", function () {
		currentGameIndex = Array.from(typesOfGame).indexOf(gameDiv);
		updatePointerVisibility();
	});

	gameDiv.addEventListener("mouseout", function () {
		updatePointerVisibility();
	});
});

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowUp":
			if (currentGameIndex > 0) {
				currentGameIndex--;
				updatePointerVisibility();
			}
			break;
		case "ArrowDown":
			if (currentGameIndex < typesOfGame.length - 1) {
				currentGameIndex++;
				updatePointerVisibility();
			}
			break;
		case "Enter":
			typesOfGame[currentGameIndex].click();
			break;
	}
});

function updatePointerVisibility() {
	document.querySelectorAll(".pointer").forEach((pointer) => {
		pointer.style.visibility = "hidden";
	});

	let currentRow = typesOfGame[currentGameIndex].closest(".row");
	let currentPointer = currentRow.querySelector(".pointer");
	currentPointer.style.visibility = "visible";
}
