let typesOfGame = document.querySelectorAll(".game");

typesOfGame.forEach(function (gameDiv) {
	let row = gameDiv.closest(".row");
	let pointer = row.querySelector(".pointer");

	gameDiv.addEventListener("mouseover", function (key) {
		pointer.style.visibility = "visible";
	});

	gameDiv.addEventListener("mouseout", function (key) {
		pointer.style.visibility = "hidden";
	});
});

function move() {
	switch (key) {
		case "ArrowUp":
			break;
		case "ArowDown":
			break;
	}
}
