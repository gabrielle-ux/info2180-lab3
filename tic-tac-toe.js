document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");
    
    let boardState = Array(9).fill(null);
    let currentPlayer = "X";
    let gameOver = false;

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            if (!gameOver && !square.textContent) square.classList.add("hover");
        });

        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
    });

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!boardState[index] && !gameOver) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (checkWinner()) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    gameOver = true;
                } else if (boardState.every(cell => cell !== null)) {
                    statusDiv.textContent = "It's a draw!";
                    statusDiv.classList.remove("you-won");
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    newGameBtn.addEventListener("click", () => {
        boardState = Array(9).fill(null);
        gameOver = false;
        currentPlayer = "X";
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });

    function checkWinner() {
        const winCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        return winCombos.some(combo => {
            const [a, b, c] = combo;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }
});
