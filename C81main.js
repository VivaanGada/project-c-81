canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "blue";
colour2 = "black";
colour3 = "red";
colour4="yellow";
colour5 = "green";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 7;
ctx.arc(350,200,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colour2;
ctx.lineWidth = 7;
ctx.arc(450,200,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colour3;
ctx.lineWidth = 7;
ctx.arc(550,200,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colour4;
ctx.lineWidth = 7;
ctx.arc(400,300,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = colour5;
ctx.lineWidth = 7;
ctx.arc(500,300,70,0,2*Math.PI);
ctx.stroke();