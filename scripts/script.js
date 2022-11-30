const gameBoard = () => {
  let gameState = ["x", "o", "x", "x", "o", "o", "x", "o", "x"];
  let currentPlayer = "X";

  const startGame = document.querySelector("#startButton");
  startGame.addEventListener("click", createBoard);

  function createBoard(e) {
    e.preventDefault();
    const contemt = document.querySelector("#content");
    const board = document.createElement("div");
    board.id = "board";
    content.appendChild(board);
    for (let i = 0; i < gameState.length; i++) {
      const square = document.createElement("div");
      board.appendChild(square).innerHTML = gameState[i];
      square.addEventListener("click", () => null);
      square.classList.add("square");
    }
    const startGameForm = document.querySelector("#startGameForm");
    startGameForm.remove();
    const resetButton = document.createElement("button");
    content.appendChild(resetButton).innerHTML = "Reset game";
    resetButton.id = "resetButton";
    resetButton.addEventListener("click", restartGame);
  }

  function restartGame(e) {
    gameState = [];
  }
};
gameBoard();
