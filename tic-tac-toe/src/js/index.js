

const gameboard = document.querySelector("#gameboard");
const indicator = document.querySelector("#indicator");
const textIndicator = document.querySelector("#text-indicator");

const Game = (function() {
	const players = [Player("First", true), Player("Second", false)]
	// const board = [
	// 	1,    0,    1,
	// 	null, 1,    0,
	// 	0,    null, 1,
	// ];
	const board = [
		null, null, null,
		null, null, null,
		null, null, null,
	];
	let firstTurns = true;
	let winner = null;
	// let winner = 1;

	function Player(name, first) {
		const getName = () => name;
		const getValue = () => first ? 1 : 0;

		return ({
			getName,
			getValue,
		});
	}
	function checkWin() {
		let wins = [
			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 0, 4, 8 ],
			[ 2, 4, 6 ],
		];
		// console.log(wins)
		for (const win of wins) {
			let current = 1;
			for (const index of win) {
				if (board[index] !== current) current = 0;
			}
			for (const index of win) {
				if (board[index] !== current) current = null;
			}
			if (current !== null) {
				winner = current
				return
			}
		}
	}
	function makeMove(index) {
		if (board[index] === null) {
			board[index] = firstTurns ? 1 : 0;
			firstTurns = !firstTurns;
			checkWin()
			renderGameBoard()
		}
		// else {
		// 	console.log("You can't put it there")
		// 	console.log(firstTurns ? "X" : "O")
		// }
	}

	const getBoard = () => board;
	const getWinner = () => winner;
	const getCurrent = () => firstTurns ? 1 : 0;

	return ({
		getBoard,
		getWinner,
		getCurrent,
		// board,
		// players,
		makeMove,
	});
})()

function renderGameBoard() {
	// got iterator because the gameboard has 18 children, and there are 9 cells
	// iterator gives a value every time the node is the div
	const positions = Game.getBoard()[Symbol.iterator]()
	gameboard.childNodes.forEach((node, i) => {
		if (node.nodeName === "BUTTON") {
			let value = positions.next().value;
			if (value === null) return -1;
			node.innerHTML = value === 1 ? `<div class='cross'><img src="./assets/images/x.png" alt=""></div>` : `<div class='circle'><img src="./assets/images/o.png" alt=""></div>`;
		}
	})

	indicator.innerHTML = Game.getCurrent() === 1 ? `<div class='cross'><img src="./assets/images/x.png" alt=""></div>` : `<div class='circle'><img src="./assets/images/o.png" alt=""></div>`;

	// turn off gameboard
	if (Game.getWinner() !== null) {
		console.log("winner", Game.getWinner())
		indicator.innerHTML = Game.getCurrent() === 0 ? `<div class='cross'><img src="./assets/images/x.png" alt=""></div>` : `<div class='circle'><img src="./assets/images/o.png" alt=""></div>`;
		textIndicator.innerHTML = "Winner is:";
		textIndicator.style.fontSize = "32px";
		gameboard.childNodes.forEach((node, i) => {
			if (node.nodeName === "BUTTON") {
				node.disabled = true;
			}
		})
		return -1;
	}
	
	if (Game.getBoard().every(p => p !== null)) {
		indicator.innerHTML = "";
		textIndicator.innerHTML = "It is a tie!";
		textIndicator.style.fontSize = "32px";
		return -1;
	}

}

renderGameBoard()


gameboard.addEventListener("click", function(event) {
	if (event.target.classList.contains("cell")) {
		Game.makeMove(event.target.dataset.index)
	}
})