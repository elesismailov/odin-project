

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


