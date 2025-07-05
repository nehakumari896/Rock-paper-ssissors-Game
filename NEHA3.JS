let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice=() => {
const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random() *3);
return options[randidx];
};

const drawgame = () => {
    console.log("game was draw.");
    msg.innertext="game was drawgame. play again.";
};

const showwinner = (userwin) => {
    if(userwin){
        console.log("you win!");
        msg.innertext="you win!";
    }else{
        console.log("you lose");
        msg.innertext="you lose.";
 }
};

const playgame=(userchoice) => {
    console.log("user choice =", userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice=== compchoice) {
         //draw game
         drawgame();
    }else{
        let userwin=true;
        if(userchoice=== "rock"){
            //scissors,paper
            compchoice==="paper" ? false : true;
        }else if(userchoice=== "paper") {
            //rock ,scissors
           userwin = compchoice=== "scissors" ? false : true;
        }else{
            //rock,paper
           userwin = compchoice==="rock" ?  false : true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
const userchoice=choice.getAttribute("id");
playgame(userchoice);
    });
});