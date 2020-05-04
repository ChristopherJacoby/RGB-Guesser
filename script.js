const changeColors = color => {
    for (i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

const randomColor=()=> {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const genRanCol = num => {
    let arr = [];
    for (i=0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

const pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

const reset = () => {
    colors = genRanCol(numOfSquares);
    //update text
    resetButton.textContent = "New Colors";
    //reset span
    messageDisplay.textContent = "";
    //pick new rnadom number
    pickedColor = pickColor();
    //change colors display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (i=0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "Steelblue";
}

let numOfSquares = 6;
let colors = genRanCol(numOfSquares);
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let squares =  document.querySelectorAll("#squares");

for (i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
        reset();
    });
} 


colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function() {
    //generate new colors
    colors = genRanCol(numOfSquares);
    //update text
    resetButton.textContent = "New Colors";
    //reset span
    messageDisplay.textContent = "";
    //pick new rnadom number
    pickedColor = pickColor();
    //change colors display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

for (let i =0; i < squares.length; i++){
    //initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        //compare clicked and picked
        if (clickedColor===pickedColor){
            messageDisplay.textContent = "Correct!"  
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?"      
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}