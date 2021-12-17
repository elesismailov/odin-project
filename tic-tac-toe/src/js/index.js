

const gameboard = document.querySelector("#gameboard");
const Game = (function() {

	const board = [
		1, 0, 1,
		0, 1, 0,
		0, 0, 1,
	];

	function getBoard() {
		return board;
	}

	return {
		getBoard,

	};
})()

function renderGameBoard() {
	const positions = Game.getBoard()[Symbol.iterator]()
	gameboard.childNodes.forEach((node, i) => {
		if (node.nodeName === "DIV") {
			let value = positions.next().value;
			node.innerHTML = value === 1 ? "X" : "O";
		}
	})
}

renderGameBoard()