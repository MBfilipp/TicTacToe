import classContains from "./modules/classContains.js";
import winAndReload from "./modules/winAndReload.js";
import addColorToBlock from "./modules/addColorToBlock.js";

export {mainBlock, square, move};

const mainBlock = document.getElementsByClassName("main-square")[0];
const square = document.getElementsByClassName("square");
let move = "first";
let squareArray = [];

for(let i = 0; i < square.length; i++){
    squareArray.push(square[i]);
}

squareArray.forEach(x => {
    addColorToBlock(x);
});



let arrayCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8]    
]


addEventListener("click", function(){
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
    arg.addEventListener("click", function(){
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