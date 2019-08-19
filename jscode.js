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
    let arrayCombinations = [];
    let combinationsInWidth = [];
    let combinationsInHeight = [];
    let plus = [];
    let last = [];
    for(res = x, i = 0 ; i < x; i++, res += x) {
        let XY = (x * y) - res - 1;
        last.unshift(XY);
        if(XY == -1) {
            last.shift();
            last.unshift(0);
        }
    }
    //Push combinationsInWidth
    for(i = 0; i < (x * y); i++) {
        combinationsInWidth.push(i);
        if(i == last[i]) {
            combinationsInWidth.push("___");
        }
    }
    
    // Push plusArray
    for(let i = 0; i < x; i++) {
        plus.push(i)
    }
    //Push combinationsInHeight
    plus.forEach((currentValue) => {
        combinationsInHeight.push([currentValue, currentValue + x, currentValue + x + x, currentValue + x + x + x, currentValue + x + x + x + x]); 
    });
    
    // Логи для проверки
    console.log(combinationsInWidth);
    console.log(last)
    
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

