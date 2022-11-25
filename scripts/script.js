
// CREATING GAMEBOARD WHEN USER CLICKS START GAME//

const game = () => {

    const startGame = document.querySelector('#startButton');
    const grid = document.querySelector(".grid");
    startGame.addEventListener('click', createBoard);

    let gameState = ['x', 'o', 'x', 'x', 'o', 'o', 'x', 'o', 'x'];

    function createBoard(e) {

        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        for (let index = 0; index < gameState.length; index++) {
            const square = document.createElement("div");
            grid.appendChild(square);
        }
    }

}









    // // CREATING DIVS FOR GRID CONATINER //

    // const input = document.querySelector('#userInput');
    // input.addEventListener('input', createGrid);

    // const grid = document.querySelector(".grid");

    // let isClicked = false;

    // function createGrid(e) {
    //     removeAllChildNodes(grid);
    //     const gridSize = parseInt(e.target.value || 0);
    //     grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    //     for (let index = 0; index < (gridSize * gridSize); index++) {
    //         const square = document.createElement("div");
    //         square.classList.add("square");
    //         grid.appendChild(square);
    //         square.addEventListener('click', changeColor);
    //         square.addEventListener('mouseover', changeColor);
    //     }
    // }

    // function removeAllChildNodes(parent) {
    //     while (parent.firstChild) {
    //         parent.removeChild(parent.firstChild);
    //     }
    // }

    // // ADDING HOVERING EFFECT FOR THE PIXELS//

    // function changeColor(e) {
    //     if (e.type == "mouseover" && isClicked) {
    //         e.target.style.backgroundColor = "#71C9CE";
    //     } else if (e.type == "click") {
    //         isClicked = !isClicked;
    //         e.target.style.backgroundColor = "#71C9CE";
    //     }
    // }

    // // ADDING GRID CLEARING //

    // const clearingButton = document.querySelector(".clearing-button");
    // clearingButton.addEventListener('click', clearGrid);

    // function clearGrid() {
    //     const gridSquares = document.querySelectorAll(".square");
    //     for (const gridSquare of gridSquares) {
    //         gridSquare.style.backgroundColor = "#c5ffff";
    //     }
    //     input.value = "";
    //     isClicked = false;
