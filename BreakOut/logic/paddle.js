function drawPaddleOne() {

    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#003300";
    ctx.fill();
    ctx.closePath();
}

function drawPaddleTwo() {

    ctx.beginPath();
    ctx.rect(paddleTwoX, 0, paddleTwoWidth, paddleTwoHeight)
    ctx.fillStyle = "#003300";
    ctx.fill();
    ctx.closePath();
}

function checkMovement() {

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += moveStep;
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += moveStep;
    }

    if (leftPressed && paddleX > 0) {
        paddleX -= moveStep;
    }

    if (leftPressed && paddleX > 0) {
        paddleX -= moveStep;
    }

    ballX += dx;
    ballY += dy;
}
