
start();

function start(){
    let startButton = document.querySelector(".start");
    startButton.addEventListener("click",()=>{
       startButton.remove();
       gameStart();
    })
}


function gameStart(){

let grid = document.querySelector(".grid");

let time = 15;
let hits = 0;
let clicks = 0;

grid.addEventListener("click",() => clicks++);


startTimer();
playGame();

function startTimer(){

    let timer = document.querySelector(".time");
    timer.textContent = `TIME: ${time}`;
    
    let second = time;
        let countdown = setInterval(() =>{
            second--;
            time = second;
            timer.textContent = `TIME: ${second}`;


            if(second == 0)
            {
                clearInterval(countdown);
                document.querySelector(".target").remove();
                removeEventListener("click",() => clicks++);
                end();
            }
        },1000)

}

function end()
{
    let gameResult = document.createElement("div");
    gameResult.className = "result";
    
    createTextDiv(`hits    : ${hits}`,gameResult);
    createTextDiv(`speed   : ${Math.round((hits/15)*100)/100} hits/second`,gameResult);
    if (clicks == 1 )
    {
        clicks++;
    }
    createTextDiv(`accuracy: ${Math.round(hits*100/(clicks-1)*100)/100}%`,gameResult);

    let playAgain = document.createElement("button");
    playAgain.className = "play-again";
    playAgain.textContent = "PLAY AGAIN"
    playAgain.addEventListener("click",() =>{
        playAgain.parentNode.remove();
        gameStart();
    })
    gameResult.appendChild(playAgain);

    grid.appendChild(gameResult);


    
}

function createTextDiv(string,parent)
{
    let temp = document.createElement("div");
    temp.className = "text";
    temp.textContent = string;

    parent.appendChild(temp);
    
    return temp;
}


function playGame()
{
     let hitCount = document.querySelector(".score");
     hitCount.textContent = `HITS : ${hits}`;
    let target = document.createElement("div");
    target.className = "target";

    grid.appendChild(target);
    changePosition(target);

    target.addEventListener("click",() =>{
        hits++;
        hitCount.textContent = `HITS : ${hits}`;
        changePosition(target);
    });

}

function changePosition(target)
{
    let gridHeight = target.parentElement.offsetHeight;
    let gridWidth = target.parentElement.offsetWidth;

    let borderWidth = 0.06*window.innerHeight;

    let targetHeight = Math.floor(Math.random()*(gridHeight - borderWidth - 40))+"px"; 
    let targetWidth = Math.floor(Math.random()*(gridWidth - borderWidth - 40))+"px"; 

    target.style.top = targetHeight;
    target.style.right = targetWidth;
}
}