

const gameboard = document.querySelector("#gameboard");

const Game = (function() {
	const players = [Player("First", true), Player("Second", false)]
	const board = [
		1,    0,    1,
		null, 1,    0,
		0,    null, 1,
	];
	// const board = [
	// 	null, null, null,
	// 	null, null, null,
	// 	null, null, null,
	// ];

	function Player(name, first) {
		const getName = () => name;
		const getValue = () => first ? 1 : 0;

		return ({
			getName,
			getValue,
		});
	}

	const getBoard = () => board;

	return ({
		getBoard,
		// players,

	});
})()

function renderGameBoard() {
	// got iterator because the gameboard has 18 children, and there are 9 cells
	// iterator gives a value every time the node is the div
	const positions = Game.getBoard()[Symbol.iterator]()
	gameboard.childNodes.forEach((node, i) => {
		if (node.nodeName === "DIV") {
			let value = positions.next().value;
			if (value === null) return ;
			node.innerHTML = value === 1 ? `<div class='cross'><img src="./assets/images/x.png" alt=""></div>` : `<div class='circle'><img src="./assets/images/o.png" alt=""></div>`;
		}
	})
}

renderGameBoard()


gameboard.addEventListener("click", function(event) {
	if (event.target.classList.contains("cell")) {
		console.log(event.target)
	}
})