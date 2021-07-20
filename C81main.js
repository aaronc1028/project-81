var canvas = document.getElementById("circleCanvas");
var ctx = canvas.getContext("2d");
var color = "red";




    
    ctx.beginPath();
    ctx.strokeStyle ="black";
    ctx.lineWidth = 1;
    ctx.rect(150, 143, 430, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle ="blue" ;
    ctx.lineWidth = 2;
    ctx.arc(250,210,40,0,2*Math.PI);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.strokeStyle ="black";
    ctx.lineWidth = 3;
    ctx.arc(350,210,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle ="red";
    ctx.lineWidth = 4;
    ctx.arc(450, 210, 40, 0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle ="gold";
    ctx.lineWidth = 5;
    ctx.arc(300, 250, 40,0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle ="green";
    ctx.lineWidth = 5;
    ctx.arc(400,250, 40, 0, 2*Math.PI);
    ctx.stroke();
   
   
   
 

function clearcanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

