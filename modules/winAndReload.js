import {mainBlock, square} from "/jscode.js";

export default function winAndReload(color) {
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