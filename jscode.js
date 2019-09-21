import classContains from "./modules/classContains.js";
import winAndReload from "./modules/winAndReload.js";
import addColorToBlock from "./modules/addColorToBlock.js";
import arrayCombinations from "./modules/coombinationArray.js";

export {mainBlock, square};

const mainBlock = document.getElementsByClassName("main-square")[0];
const square = document.getElementsByClassName("square");
let squareArray = [];

for(let i = 0; i < square.length; i++){
    squareArray.push(square[i]);
}

squareArray.forEach(x => {
    addColorToBlock(x);
});

document.body.onclick = function(){
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
};
