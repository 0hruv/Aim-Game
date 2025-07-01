
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

startTimer();
playGame();

function startTimer(){

    let timer = document.querySelector(".time");
    
    let second = 15;
        let countdown = setInterval(() =>{
            second--;
            time = second;
            timer.textContent = `TIME: ${second}`;

            if(second == 0)
            {
                clearInterval(countdown);
                document.querySelector(".target").remove();
            }
        },1000)

}



function playGame()
{
    let target = document.createElement("div");
    target.className = "target";

    grid.appendChild(target);
    changePosition(target);

    target.addEventListener("click",() =>{
        hits++;
        let hitCount = document.querySelector(".score")
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