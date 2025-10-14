document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(square => {
        square.classList.add("square");
    });

    console.log("All squares styled successfully!");
});
