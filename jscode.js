let block1 = document.getElementById("1");
let block2 = document.getElementById("2");
let block3 = document.getElementById("3");
let block4 = document.getElementById("4");
let block5 = document.getElementById("5");
let block6 = document.getElementById("6");
let block7 = document.getElementById("7");
let block8 = document.getElementById("8");
let block9 = document.getElementById("9");

let mainBlock = document.getElementsByClassName("main-squar")[0];
let squar = document.getElementsByClassName("squar");
let move = "first";

addColorToBlock(block1);
addColorToBlock(block2);
addColorToBlock(block3);
addColorToBlock(block4);
addColorToBlock(block5);
addColorToBlock(block6);
addColorToBlock(block7);
addColorToBlock(block8);
addColorToBlock(block9);

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
    if(color == "yellow") {
        mainBlock.style = "animation: shadowYellow 2s linear";
    }else if(color == "orange") {
        mainBlock.style = "animation: shadowOrange 2s linear";
    }
    for(let i = 0; i < 9; i++) {
        squar[i].style = "display: none";
    }
    setTimeout(() => {
        location.reload();
    }, 1500);
   
}

function moveBlock(){
    if(blockInLineFirst(block1, block2, block3)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block4, block5, block6)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block7, block8, block9)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block1, block5, block9)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block2, block5, block8)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block3, block5, block7)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block1, block4, block7)) {
        winAndReload("yellow");
    }else if(blockInLineFirst(block3, block6, block9)) {
        winAndReload("yellow");
    }

    if(blockInLineSecond(block1, block2, block3)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block4, block5, block6)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block7, block8, block9)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block1, block5, block9)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block2, block5, block8)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block3, block5, block7)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block1, block4, block7)) {
        winAndReload("orange");
    }else if(blockInLineSecond(block3, block6, block9)) {
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

let TIME = setInterval(moveBlock, 1000);