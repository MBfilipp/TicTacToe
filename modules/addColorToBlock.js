let move = "first";

export default function addColorToBlock(arg) {
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