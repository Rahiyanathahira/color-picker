var noOfSquares = 6;
var arr = [];
//color picker for target
var picked;

//to get all the square div
var squares = document.getElementsByClassName("square");

//to get Rgb display
var targetColor = document.getElementById("targetColor");

//message that can be empty
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementById("NewColor");

function init()
{
    //generate random colored palette
    arr = generateRandomColor(noOfSquares);

    //get target color randomly from the array size
    picked = arr[randomPickedColorIndex()];

    //updating target RGB display
    targetColor.textContent = picked;

    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = arr[i];
        squares[i].addEventListener("click",function(){
          if(picked === this.style.backgroundColor){
            message.textContent = "Correct";
            message.style.color = "green";

            changeColor(this.style.backgroundColor);
            reset.textContent = "Play Again?";
          }
          else{
            message.textContent = "Try Again";
            message.style.color = "red";
            //hide wrong square
            this.style.backgroundColor="rgb(50,50,50)";
          }
        });
        
    }
}
init();
reset.addEventListener("click", resetIn);

//random color
function randomPickedColorIndex(){
    return Math.floor(Math.random()*arr.length);
}
//random pallette of color
function generateRandomColor(limit){
    var color = [];
    for(var i=0; i<limit; i++)
    color.push(rgbGenerator());
    return color;
}
function rgbGenerator(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}
function changeColor(color){
    for(var i = 0; i < squares.length;i++)
    squares[i].style.backgroundColor = color;
    head.style.backgroundColor = color;
}
function resetIn(){
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent =picked;
    message.textContent = "";
    head.style.backgroundColor = "blue";

    for(var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor = arr[i];
}