let boxes = document.querySelectorAll(".box");
let count = 0;
let gameOver = false;


let winningCombination = [
    [0, 1, 2],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [6, 7, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7]
];
let board = ["", "", "", "", "", "", "", "", ""];

boxes.forEach((box, index) => {
    box.addEventListener("click", function (e) {
        if(gameOver) return;
        if (board[index] === "") {
            count++;
            let clickedId = e.target.id;
            console.log(clickedId);
            let clickedBox = document.getElementById(clickedId);

            if (count % 2 == 0) {
                console.log("X is printed");
                console.log(count);
                board[index] = "X";
                clickedBox.innerText = "X";
            } else {
                console.log("O is printed");
                console.log(count);
                board[index] = "O";
                clickedBox.innerText = "O";
            }
            if (winner()) {
                let cntx = 0;
                let cnto = 0;
                let player = winner();
                gameOver = true;
                if (player == "0") {
                    cnto++;
                    let scoreO = document.getElementById("score-O");
                    scoreO.innerText = cnto;
                } else {
                    cntx++;
                    let scoreX = document.getElementById("score-X");
                    scoreX.innerText = cntx;
                }
            }
        }
    });
})

function winner() {
    for (let winsitutation of winningCombination) {
        let [a, b, c] = winsitutation;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return false;

}
