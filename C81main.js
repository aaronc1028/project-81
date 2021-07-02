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
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
function clearcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

