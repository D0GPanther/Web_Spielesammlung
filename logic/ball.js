function drawBall() {

    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#003300";
    ctx.fill();
    ctx.closePath();
}



function collisionPaddle() {

    if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
    }

    if (ballY + dy < ballRadius) {
        if (twoPlayer == false) {
            dy = -dy;
        }
        else {
            multiplayerTopCollision();
        }
    }
    else if (ballY + dy > canvas.height - ballRadius) {
        if (ballX > paddleX-10 && ballX < (paddleX + paddleWidth)+10) {
            var tempHitPoint = (ballX - paddleX);
            var tempWinkel = (tempHitPoint / (paddleWidth / 2));

            if (tempWinkel < 1) {
                dx = -(3 * (tempWinkel));
            } else if (tempWinkel > 1) {
                dx = 3 * (tempWinkel);
            }
            dy = -dy;
            bounceScore += 1;
            dy = dy * 1.1;            
        }
        else {
            if (twoPlayer == false) {
                lives--;
                if (!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    ballX = canvas.width / 2;
                    ballY = canvas.height - 30;
                    dx = 3;
                    dy = -3;
                    paddleX = (canvas.width - paddleWidth) / 2;
                    sleep(500);
                }
                A = Uint8Array.from(bricks)
            }
            else {
                points[1] += 1;
                ballX = canvas.width / 2;
                ballY = canvas.height - 30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }
}
