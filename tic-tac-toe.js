
document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    if (!board) {
        console.error('No element with id="board" found. Make sure your HTML has <div id="board">...</div>');
        return;
    }

    let squares = board.querySelectorAll("div");
    if (!squares || squares.length === 0) {
        squares = board.querySelectorAll(".square");
    }

    const boardState = Array(9).fill(null);
    let currentPlayer = "X";

    squares.forEach((square, index) => {
        square.classList.add("square");
        square.style.cursor = "pointer";

        square.addEventListener("click", function handleClick(e) {

            if (boardState[index]) {
                return;
            }

            boardState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer); 

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });

    console.log("Tic-tac-toe initialized.");
});

