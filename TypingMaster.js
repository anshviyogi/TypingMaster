// Getting HTML Elements
var wordDisplay = document.getElementById("current-word")
var inputDisplay = document.getElementById("word-input")
var scoreDisplay = document.getElementById("score")
var timeDisplay = document.getElementById("time")
var overDisplay = document.getElementById("over")
var refreshGame = document.getElementById("refresh")
var startGame = document.getElementById("startGame")
var endGame = document.getElementById("endGame")
const seconds = document.getElementById("seconds")
// Level buttons deceleration--------------------------------
const easyButton = document.getElementById("easy-btn")
const mediumButton = document.getElementById("medium-btn")
const hardButton = document.getElementById("hard-btn")
const mainLevelDiv = document.getElementById("level-buttons")
// Ended-----------------------------------------------------
startGame.addEventListener("click",startWindow)   // On start button click function
let time;
let timeRepeat;
// Editing inside---------------------------------------
inputDisplay.disabled = true
inputDisplay.placeholder = "Follow instructions to unlock Functions"
startGame.disabled = true;
// -----------------------------------------------------
console.log(time)
function startWindow(){
    inputDisplay.disabled = false
    inputDisplay.placeholder = "Start Typing"
    alert("Starting Your Game")
    showWord();
    startGame.style.display = "none"
// For time
setInterval(countdown,1000)
// End game button
endGame.style.display = "inline"
}
endGame.addEventListener("click",end)
function end(){
    time = 0;
    endGame.disabled = true
}
//let time = 6;
let words = ["for","loops","do-while","console","log","javascript","alert()","extensions"];

function showWord(){
    wordDisplay.style.color="white"
    let random = Math.floor(Math.random() * words.length)
    wordDisplay.textContent = words[random]
}

// Matching words
inputDisplay.addEventListener("input",matchWord)
function matchWord(){
    if(wordDisplay.textContent == inputDisplay.value){ 
        showWord()
        inputDisplay.value = ""
        addScore();
      time = timeRepeat;  
    }
}

function addScore(){
    let score = scoreDisplay.textContent;
    score++
    scoreDisplay.textContent = score;
}

function countdown(){
    if(time>0){
        time--
    }
    timeDisplay.innerHTML = time;
    if(time<=0){
        endGame.disabled = true
        inputDisplay.disabled = true;
        overDisplay.style.display = "block"
        refreshGame.style.display = "block"
        endGame.style.display = "none"
    }
}

// Level Buttons Functionality 

easyButton.addEventListener("click",function(){
  time = 6;
  mainLevelDiv.style.display = "none"
seconds.innerHTML = "5";
wordDisplay.innerHTML = "Start Game"
startGame.disabled = false;
timeRepeat = 6;
})

mediumButton.addEventListener("click",function(){
    time = 5;
    mainLevelDiv.style.display = "none"
    seconds.innerHTML = "4"
    wordDisplay.innerHTML = "Start Game"
    startGame.disabled = false;
    timeRepeat = 5;
})

hardButton.addEventListener("click",function(){
    time = 4
    mainLevelDiv.style.display = "none"
    seconds.innerHTML = "3"
    wordDisplay.innerHTML = "Start Game"
    startGame.disabled = false;
    timeRepeat = 4;
})

// Next step - reset button containing page refresh
// Refresh part

refreshGame.addEventListener("click",function(){
    window.location.reload();
})
