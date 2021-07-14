// Declare Variables
var button = document.querySelector("button");
var body = document.querySelector("body");
var colors = ["red", "orange", "purple", "black", "green", "white", "brown", "blue", "yellow"]

// Add Event Listener
document.querySelector("button").addEventListener("click", changeBackgroundcolor);

function changeBackgroundcolor() {
    var myColor = parseInt(Math.random() * colors.length)
    document.querySelector("body").style.background = colors[myColor]
}