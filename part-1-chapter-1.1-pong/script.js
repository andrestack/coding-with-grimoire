const canvas = document.getElementById("pong-canvas");
const context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 400;

const paddleWidth = 10;
const paddleHeight = 60;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - 30;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 10;

function drawPaddle() {
  context.fillStyle = "#000";
  context.fillRect(paddleHeight, paddleWidth, paddleX, paddleY);
}

function drawBall() {
  context.beginPath();
  context.arc(ballX, ballY.ballRadius, 0, Math.PI * 2);
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}
