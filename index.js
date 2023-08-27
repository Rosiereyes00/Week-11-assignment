let currentPlayer = "x";
let cells = ["","","","","","","","",""];
// get the cells and resets button of the elements
let cellElements = document.querySelectorAll("td");
let resetButton = document.getElementById("reset-button");
// adds click event listener to cell elements
cellElements.forEach(function(cellElement,index){
    cellElement.addEventListener("click",function(){
        if (cells[index] === "") {
            cells[index] = currentPlayer;
            cellElement.textContent = currentPlayer;
            if(checkWin()){
                alert(currentPlayer + "wins!");
                resetGame();
            }else if (checkTie()){
                alert("Tie game!");
                resetGame();
            }else{
                currentPlayer = (currentPlayer === "X") ? "O" : "X";
            }
        }
    });
});
resetButton.addEventListener("click", resetGame);
function checkWin() {
    if ((cells[0] === currentPlayer && cells[1] === currentPlayer && cells[2] === currentPlayer) ||
        (cells[3] === currentPlayer && cells[4] === currentPlayer && cells[5] === currentPlayer) ||
        (cells[6] === currentPlayer && cells[7] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[3] === currentPlayer && cells[6] === currentPlayer) ||
        (cells[1] === currentPlayer && cells[4] === currentPlayer && cells[7] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[5] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[4] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[4] === currentPlayer && cells[6] === currentPlayer)) {
         return true;
        }
        return false;
        }
        function checkTie() {
            for(let i = 0; i < cells.length; i++) {
                if (cells[i] === "") {
                    return false;
                }
            }
            return true;
        }
        function resetGame() {
            currentPlayer = "X";
            cells = ["","","","","","","","",""];
            cellElements.forEach(function(cellElement){
                cellElement.textContent = "";
            });
        }