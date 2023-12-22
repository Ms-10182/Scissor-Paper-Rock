let userScore =0;
let compScore =0;

let userChoice;
let compChoice;

let msg = document.querySelector("#msg");
let compScoreBoard = document.querySelector("#compScore");
let userScoreBoard = document.querySelector("#userScore");
// let scissor = document.querySelector("#scissor");
// let paper = document.querySelector("#paper");
// let rock = document.querySelector("#rock");
let choices =document.querySelectorAll(".choice");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let idx =Math.floor(Math.random()*3);
    // console.log(options[idx]);
    return options[idx];
};

const comWon=() =>{
    compScore++;
    msg.innerText="Computer won!";
    compScoreBoard.innerText=`${compScore}`;
}

const userWon=()=>{
    userScore++;
    msg.innerText="User won!";
    userScoreBoard.innerText=`${userScore}`;
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        console.log("user choice: ",userChoice);
        compChoice=genCompChoice();
        console.log("comp choice: ",compChoice);


        if(compChoice==="scissor"){
            if(userChoice==="paper"){
                comWon();
            }
            else if(userChoice==="rock"){
                userWon();
            }
            else{
                msg.innerText="Its a draw";
            }
        }
        else if(compChoice==="paper"){
                if(userChoice==="rock"){
                    comWon();
                }
                else if(userChoice==="scissor"){
                    userWon();
                }
                else{
                    msg.innerText="Its a draw";
                }
        }
        else if(compChoice==="rock"){
            if(userChoice==="scissor"){
                comWon();
            }
            else if(userChoice==="paper"){
                userWon();
            }
            else{
                msg.innerText="Its a draw";
            }
        }
    });
    
})

// scissor.addEventListener("click",()=>{
//     userChoice = "scissor";
//     compChoice =genCompChoice();
// });

// scissor.addEventListener("click",()=>{
//     userChoice = "paper";
//     compChoice =genCompChoice();
// });

// scissor.addEventListener("click",()=>{
//     userChoice = "rock";
//     compChoice =genCompChoice();
// });

