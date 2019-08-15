const mainBlock = document.getElementsByClassName("main-squar")[0];
const squar = document.getElementsByClassName("squar");
let move = "first";

//Add event listener - check

addColorToBlock(squar[0]);
addColorToBlock(squar[1]);
addColorToBlock(squar[2]);
addColorToBlock(squar[3]);
addColorToBlock(squar[4]);
addColorToBlock(squar[5]);
addColorToBlock(squar[6]);
addColorToBlock(squar[7]);
addColorToBlock(squar[8]);

function containsBlock(arg, name) {
    return arg.classList.contains(name);
}

function blockInLineFirst(first, second, third) {
    return containsBlock(first, "first") && containsBlock(second, "first") && containsBlock(third, "first");
    
}

function blockInLineSecond(first, second, third) {
    return containsBlock(first, "second") && containsBlock(second, "second") && containsBlock(third, "second");
}

function winAndReload(color) {
    move = "";

    //Main block style

    if(color == "yellow") {
        mainBlock.style = "animation: shadowYellow 2s linear";
    }else if(color == "orange") {
        mainBlock.style = "animation: shadowOrange 2s linear";
    }else if(color == "draw") {
        mainBlock.style = "animation: shadowDraw 2s linear";
    }
    for(let i = 0; i < 9; i++) {
        squar[i].style = "display: none";
    }
    setTimeout(() => {
        location.reload();
    }, 1500);
    
}



function moveBlock(){
    if(blockInLineFirst(squar[0], squar[1], squar[2])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[3], squar[4], squar[5])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[6], squar[7], squar[8])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[0], squar[4], squar[8])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[1], squar[4], squar[7])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[2], squar[4], squar[6])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[0], squar[3], squar[6])) {
        winAndReload("yellow");
    }else if(blockInLineFirst(squar[2], squar[5], squar[8])) {
        winAndReload("yellow");
    }else if(blockInLineSecond(squar[0], squar[1], squar[2])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[3], squar[4], squar[5])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[6], squar[7], squar[8])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[0], squar[4], squar[8])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[1], squar[4], squar[7])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[2], squar[4], squar[6])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[0], squar[3], squar[6])) {
        winAndReload("orange");
    }else if(blockInLineSecond(squar[2], squar[5], squar[8])) {
        winAndReload("orange");
    }
}

function addColorToBlock(arg) {
    arg.addEventListener("click", function(){
        if(move == "first" && !arg.classList.contains("second")) {
            move = "second";
            arg.style = "background-color: yellow";
            arg.classList.add("first");
        }else if(move == "second" && !arg.classList.contains("first")) {
            move = "first";
            arg.style = "background-color: orange";
            arg.classList.add("second");
        }
        
    });     
}
//TIME - check 

const TIME = setInterval(moveBlock, 100);  



