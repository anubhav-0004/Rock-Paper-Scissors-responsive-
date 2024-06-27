let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".option");
let msg = document.querySelector("#msg");
let msgBg = document.querySelector("#msg-text");

let compChoiceFn = () => {
    let compChoiceScore = Math.floor(Math.random()*3);
    let options = ["rock", "paper", "scissors"];
    return options[compChoiceScore];
}

let game = (userChoice) => {
    const compChoice = compChoiceFn();
    // console.log("ComputerChoice:" ,compChoice, "& UserChoice:", userChoice);
    if(userChoice === compChoice){
        msg.textContent = "Match draw!! Play Again";
        msgBg.style.backgroundColor = "yellow";
        msgBg.style.color = "black";
    }
    else{
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                compCount++;
                msg.textContent = "You loose!!";
                msgBg.style.backgroundColor = "red";
                msgBg.style.color = "white";
            }
            else{
                userCount++;
                msg.textContent = "You Win!!";
                msgBg.style.backgroundColor = "green";
                msgBg.style.color = "yellow";
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissors"){
                compCount++;
                msg.textContent = "You loose!!";
                msgBg.style.backgroundColor = "red";
                msgBg.style.color = "white";
            }
            else{
                userCount++;
                msg.textContent = "You Win!!";
                msgBg.style.backgroundColor = "green";
                msgBg.style.color = "yellow";
            }
        }
        else{
            if(compChoice === "paper"){
                userCount++;
                msg.textContent = "You Win!!";
                msgBg.style.backgroundColor = "green";
                msgBg.style.color = "yellow";
            }
            else{
                compCount++;
                msg.textContent = "You Loose!!";
                msgBg.style.backgroundColor = "red";
                msgBg.style.color = "white";
            }
        }
    }
    userScore.textContent = userCount;
    compScore.textContent = compCount;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    });
});