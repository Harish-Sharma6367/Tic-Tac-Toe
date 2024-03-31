let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset-game");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winnerList = [
    [0, 1, 2, 3],
    [0, 4, 8, 12],
    [0, 5, 10, 15],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [3, 6, 9, 12],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 1, 4, 5],
    [1, 2, 5, 6],
    [2, 3, 6, 7],
    [4, 5, 8, 9],
    [5, 6, 9, 10],
    [6, 7, 10, 11],
    [8, 9, 12, 13],
    [9, 10, 13, 14],
    [10, 11, 14, 15]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = "true";

        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}

disableBtns = () => {
    for(let i=0;i<btns.length;i++){
        btns[i].disabled = true;
    }
}

enableBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (winner) => {
    if(winner === "O"){
        msg.innerText = `Congratulations! Winner is Harish`;
    }else{
        msg.innerText = `Congratulations! Winner is Jaikishan`;
    }
    msgContainer.classList.remove("hide");
};

const checkWinner = () =>{
    for(let pattern of winnerList){
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;
        let pos4Val = btns[pattern[3]].innerText;
        console.log(pos1Val);
        console.log(pos2Val);
        console.log(pos3Val);
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos4Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val){
                showWinner(pos1Val);
                disableBtns();
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);