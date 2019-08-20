const mainBlock = document.getElementsByClassName("main-squar")[0];
const squar = document.getElementsByClassName("squar");
let move = "first";
let squarArray = [];

for(let i = 0; i < 9; i++){
    squarArray.push(squar[i]);
}

squarArray.forEach(x => {
    addColorToBlock(x);
});

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

function algorithm(x, y){
    
    let mainArray = [];
    let xCordinates = [0];

    for(let i = 0; i < x - 1; i++) {
        xCordinates.push(xCordinates[i] + x);
    }
    console.log(xCordinates);
}
algorithm(5, 5);

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

function classContains(obj, name) {
    return obj.classList.contains(name);
}

addEventListener("click", function(){
    let coo1, coo2, coo3;
    arrayCombinations.forEach(function(currentValue, index) {
        [coo1, coo2, coo3] = currentValue;
        if(classContains(squar[coo1], "first") && classContains(squar[coo2], "first") && classContains(squar[coo3], "first")) {
            winAndReload("yellow");
        }
        if(classContains(squar[coo1], "second") && classContains(squar[coo2], "second") && classContains(squar[coo3], "second")) {
            winAndReload("orange");
        }    
    });
});


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

