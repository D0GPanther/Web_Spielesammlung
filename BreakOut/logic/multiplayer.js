

function multiplayerTopCollision() {

    if (ballX > paddleTwoX-10 && ballX < (paddleTwoX + paddleTwoWidth)+10) {
        var tempHitPoint = (ballX - paddleTwoX);
        var tempWinkel = (tempHitPoint / (paddleTwoWidth / 2));

        if (tempWinkel < 1) {
            dx = -(3 * (tempWinkel))
        } else if (tempWinkel > 1) {
            dx = 3 * (tempWinkel);
        }
        dy = -dy;
        dy = dy * 1.1;
    }
    else {
        points[0] += 1;
        ballX = canvas.width / 2;
        ballY = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
        sleep(500);
    }
}

function checkWin() {

    if (points[0] >= winPoints) {
        alert("Player 1 win!");
        document.location.reload();
    } else if (points[1] >= winPoints) {
        alert("Player two win!");
        
        document.location.reload();
    }
}