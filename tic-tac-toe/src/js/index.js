

const gameboard = document.querySelector("#gameboard");

const Game = (function() {
	const players = [Player("First", true), Player("Second", false)]
	const board = [
		1, 0, 1,
		null, 1, 0,
		0, 0, 1,
	];

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
	const positions = Game.getBoard()[Symbol.iterator]()
	gameboard.childNodes.forEach((node, i) => {
		if (node.nodeName === "DIV") {
			let value = positions.next().value;
			if (value === null) return ;
			node.innerHTML = value === 1 ? "X" : "O";
		}
	})
}

renderGameBoard()
