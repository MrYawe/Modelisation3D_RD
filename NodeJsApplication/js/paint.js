var my_canvas = document.getElementById("canvas");
var context = my_canvas.getContext("2d");
context.beginPath();
context.arc(75,75,60,0,Math.PI*2);
context.moveTo(20, 20);
context.lineTo(100, 20);
context.fillStyle = "red";
context.fillRect(50, 60, 50, 20);
context.font = "30px Garamond";
context.fillText("Hello!",15,175);
context.stroke();