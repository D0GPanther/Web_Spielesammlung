/* 
 * Zeichet die Blöcke für BreakOut und checkt die Kollision mit dem Ball
 * */

function drawBricks() {

    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                switch (c) {
                    case 0:
                        ctx.fillStyle = "#FF0000";
                        break;
                    case 1:
                        ctx.fillStyle = "#00FF00";
                        break;
                    case 2:
                        ctx.fillStyle = "#0000FF";
                        break;
                    case 3:
                        ctx.fillStyle = "#DD00FF";
                        break;
                    default:
                        ctx.fillStyle = "#7795AD";
                        break;
                }
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() {

    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        alert("YOU WIN!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}