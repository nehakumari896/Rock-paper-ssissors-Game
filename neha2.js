let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => { 
    msg.innerText="game was draw. play again.";
    msg.style.backgroundcolor="#081b31"
 };

 const showWinner = (userWin ,userchoice,compChoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundcolor="green";
    }else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lost. ${userchoice} beats your ${compChoice}`;
        msg.style.backgroundcolor="red";
    }
 };

const playGame = (userchoice) => {
    //generate computer choice
    const compChoice = gencompchoice();

    if(userchoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors.paper
            userWin=compChoice === "paper"?false:true;
        }else if(userchoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissors"?false:true;
        }else {
        //rock,paper
        userWin=compChoice === "rock"?false:true;
    }
    showWinner(userWin, userchoice, compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    });
});
