 canvas=document.getElementById("my_canvas");
 ctx=canvas.getContext("2d");

 ctx.beginPath();
 ctx.strokeStyle="red";
 ctx.lineWidth=1;
 ctx.rect(150, 143, 430, 200,);
 ctx.stroke();

 ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(270, 250, 40, 0, 2*Math.PI);
ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="black";
 ctx.lineWidth=5;
 ctx.arc(350, 250, 40, 0, 2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="red";
 ctx.lineWidth=5;
 ctx.arc(430, 250, 40, 0, 2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="yellow";
 ctx.lineWidth=5;
 ctx.arc(320, 300, 40, 0, 2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="green";
 ctx.lineWidth=5;
 ctx.arc(390, 300, 40, 0, 2*Math.PI);
 ctx.stroke();