let randomNumber = document.querySelector(".guessNumber");
let guess = document.querySelector("#input");
let btn = document.querySelector(".check");
let start = document.querySelector(".start");
let score = document.querySelector("#scoreNumber");
let highscore = document.querySelector(".highscore div");
let again = document.querySelector(".again");
let playAgain = document.querySelector(".playAgain");

let answer = Math.floor(Math.random()*20) +1;
let guessNumber = guess.value;
let scoreNumber = 20;
let highscoreNumber = 0;

again.addEventListener("click", () =>{
    btn.disabled = false;
    scoreNumber = scoreNumber-1;
    score.textContent = `${scoreNumber}`; 
});

function highestScore(){
    if (highscoreNumber < scoreNumber) {
        highscoreNumber = scoreNumber;
        highscore.innerHTML = `${scoreNumber}`;
    }
};

playAgain.addEventListener("click", () =>{
    playAgain.style.display = "none";
    scoreNumber = 20;
    score.innerHTML = "20";
    answer = Math.floor(Math.random()*20)+1 ;
    btn.disabled = false;
    randomNumber.style.backgroundColor = 'white';
    randomNumber.innerHTML= "?";
    start.innerHTML = "Start guessing.....";
    guess.value= "";
});

function number(){
    btn.addEventListener("click", () =>{
        guessNumber = guess.value;
        btn.disabled = true;
    
        if(isNaN(guessNumber)){
            start.innerHTML = 'please enter a valid number';
        }
        else if(guessNumber < 1 || guessNumber > 20){
            start.innerHTML = 'please enter a valid number';
        }
        else{
            if (guessNumber > answer) {
                start.innerHTML = 'TOO HIGH! TRY AGAIN';
            } 
            else if (guessNumber < answer) {
                start.innerHTML = 'TOO LOW! TRY AGAIN';
            }
            else {
                start.innerHTML = `CORRECT! The answer was ${answer}`;
                randomNumber.innerHTML = `${answer}`;
                randomNumber.style.backgroundColor = 'greenyellow';
                highestScore();
                playAgain.style.display = "block";
            }  
        }
    });
}

number();