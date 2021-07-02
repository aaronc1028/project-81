var canvas = document.getElementById("circleCanvas");
var ctx = canvas.getContext("2d");
var color = "red";

canvas.addEventListener("mousedown", drawCircle)
function drawCircle(e) {
    color = document.getElementById("textInput").value;
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circle(mouseX, mouseY)
}
function circle(x, y) {
    
    ctx.beginPath();
    ctx.strokeStyle =red;
    ctx.lineWidth = 1;
    ctx.arc(150, 143, 430, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle :green ;
    ctx.lineWidth = 2;
    ctx.arc(150, 143, 430, 200);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.strokeStyle =grey;
    ctx.lineWidth = 3;
    ctx.arc(150, 143, 430, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle =yellow;
    ctx.lineWidth = 4;
    ctx.arc(150, 143, 430, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle =blue;
    ctx.lineWidth = 5;
    ctx.arc(100, 40, 0, 2*Math.PI);
    ctx.stroke();
   
   
   
 
}
function clearcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

