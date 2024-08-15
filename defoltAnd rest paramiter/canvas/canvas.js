// canvas akta html tag jar help a drowing ar kaj kora hy

// find kore nite hbe 
 var c= document.querySelector("#mycanvas");

 // j method diye kaj korbo ta khuje nite hbe
 var ctx=c.getContext("2d");

 // shape making
 ctx.lineWidth=3;
 ctx.strokeStyle="black";
 ctx. strokeRect(10,10,380,280);
 // vitore kajer jnno fill use kora hy
 ctx.fillStyle="green";
 ctx.fillRect(12,12,375,277);

 // circle center a making 
  var centerx=c.width / 2;
  var centery=c.height / 2;

  ctx.beginPath();
  ctx.arc(centerx,centery,80,0,2*Math.PI,false);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
