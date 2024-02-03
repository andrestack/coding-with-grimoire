const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const paddleWidth = 12;
const paddleHeight = 65;

let leftPaddleY = 20;
let leftPaddleX = 0;

let rightPaddleY = (canvas.width - paddleWidth) / 2;
let rightPaddleX = canvas.width - paddleWidth;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 10;

function drawPaddle(x, y, width, height) {
  ctx.fillStyle = "#000";
  ctx.fillRect(x, y, width, height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.closePath();
}

let ballSpeedX = 2;
let ballSpeedY = 2;

function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Collision detection with top and bottom walls
  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballSpeedY = -ballSpeedY; // Reverse ball direction
  }
}

let leftPaddleSpeed = 0;
let rightPaddleSpeed = 0;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      leftPaddleSpeed = -4;
      break;
    case "s":
      leftPaddleSpeed = 4;
      break;
    case "ArrowUp":
      rightPaddleSpeed = -4;
      break;
    case "ArrowDown":
      rightPaddleSpeed = 4;
  }
});

document.addEventListener("keyup", (event) => {
  leftPaddleSpeed = 0;
  rightPaddleSpeed= 0
});

function updatePaddlePosition() {
  leftPaddleY += leftPaddleSpeed;
  leftPaddleY = Math.max(leftPaddleY, 0);
  leftPaddleY = Math.min(leftPaddleY, canvas.height - paddleHeight);
  rightPaddleY += rightPaddleSpeed;
  rightPaddleY = Math.max(rightPaddleY, 0);
  rightPaddleY = Math.min(rightPaddleY, canvas.height - paddleHeight);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight);
  drawPaddle(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight);
  drawBall();
  updateBallPosition();
  updatePaddlePosition();
  requestAnimationFrame(draw);
}

draw();
