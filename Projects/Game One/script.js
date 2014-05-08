var paddleX = 200;
var paddleY = 460;
 
var paddleWidth = 100;
var paddleHeight = 15;
 
var paddleDeltaX = 0;
var paddleDeltaY = 0;
 
function drawPaddle(){
  context.fillRect(paddleX,paddleY,paddleWidth,paddleHeight);
}