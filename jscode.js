"use strict"

const mainBlock = document.getElementsByClassName("main-square")[0];
const square = document.getElementsByClassName("square");
let move = "first";
let squareArray = [];

for(let i = 0; i < 9; i++){
    squareArray.push(square[i]);
}

squareArray.forEach(x => {
    addColorToBlock(x);
});

function winAndReload(color) {
    move = "";

    //Main block style

    if(color === "yellow") {
        mainBlock.style = "animation: shadowYellow 2s linear";
    }else if(color === "orange") {
        mainBlock.style = "animation: shadowOrange 2s linear";
    }else if(color === "draw") {
        mainBlock.style = "animation: shadowDraw 2s linear";
    }
    for(let i = 0; i < 9; i++) {
        square[i].style = "display: none";
    }
    setTimeout(() => {
        location.reload();
    }, 1500);
    
}

function algorithm(x){
    
    let mainArray = [];
    let xCoordinates = [0];
    let arr = [];   

    for(let i = 0; i < x - 1; i++) {
        xCoordinates.push(xCoordinates[i] + x);
    }

    let alterArray = [];
    alterArray.push(xCoordinates);
    xCoordinates.forEach(function(currentValue){
        
        arr[0] = (currentValue + 1);
        arr[1] = (currentValue + 2);

    });
    alterArray.push(arr);
    console.log(alterArray);
}
algorithm(3);

let arrayCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8]    
];

addEventListener("click", () => {
    let coo1, coo2, coo3;
    arrayCombinations.forEach(function(currentValue) {
        [coo1, coo2, coo3] = currentValue;
        if(classContains(square[coo1], "first") && classContains(square[coo2], "first") && classContains(square[coo3], "first")) {
            winAndReload("yellow");
        }
        if(classContains(square[coo1], "second") && classContains(square[coo2], "second") && classContains(square[coo3], "second")) {
            winAndReload("orange");
        }    
    });
});


function addColorToBlock(arg) {
    arg.addEventListener("click", () => {
        if(move === "first" && !arg.classList.contains("second")) {
            move = "second";
            arg.style = "background-color: yellow";
            arg.classList.add("first");
        }else if(move === "second" && !arg.classList.contains("first")) {
            move = "first";
            arg.style = "background-color: orange";
            arg.classList.add("second");
        }
        
    });     
}

function classContains(obj, name) {
    return obj.classList.contains(name);
}