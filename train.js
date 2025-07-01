
createGrid();

function createGrid()
{
    let grid = document.querySelector(".grid");

    let target = document.createElement("div");
    target.className = "target";

    grid.appendChild(target);

    let gridHeight = target.parentElement.offsetHeight;
    let gridWidth = target.parentElement.offsetWidth;

    let borderWidth = 0.06*window.innerHeight;

    let targetHeight = Math.floor(Math.random()*(gridHeight - borderWidth - 40))+"px"; 
    let targetWidth = Math.floor(Math.random()*(gridWidth - borderWidth - 40))+"px"; 

    target.style.top = targetHeight;
    target.style.right = targetWidth;

    
}