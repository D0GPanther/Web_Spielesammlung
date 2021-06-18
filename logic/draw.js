function drawScore() {

        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFA001";
        ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {

    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFA001";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function drawPoints() {

    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFA001";
    ctx.fillText("Player 1: " + points[0], canvas.width - 100, (canvas.height / 2)-10);
    ctx.fillText("Player 2: " + points[1], canvas.width - 100, (canvas.height / 2)+10);
}

function drawBounceScore() {

    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFA001";
    ctx.fillText("Score: " + bounceScore, 8, 20);
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddleOne();
    collisionPaddle();
    checkMovement();

    if (twoPlayer == true && bounceGame == false) {
        drawPaddleTwo();
        drawPoints();
        checkWin();
    }

    if (twoPlayer == false && bounceGame == false) {
        drawBricks();
        drawLives();
        drawScore();
        collisionDetection();
    }

    if (bounceGame == true) {
        drawLives();
        drawBounceScore();
        dy += 0.2;
    }

    requestAnimationFrame(draw);
}

function drawSettings() {

  let sButtonBreakOut = document.createElement("button");
  sButtonBreakOut.innerHTML = "Break Out";
  sButtonBreakOut.id = "sButtonBreakOut";
  document.body.appendChild(sButtonBreakOut);

  let sButtonBounceBall = document.createElement("button");
  sButtonBounceBall.innerHTML = "Bounce Ball";
  sButtonBounceBall.id = "sButtonBounceBall";
  document.body.appendChild(sButtonBounceBall);

  let sButtonPong = document.createElement("button");
  sButtonPong.innerHTML = "Multiplayer";
  sButtonPong.id = "sButtonPong";
  document.body.appendChild(sButtonPong);
}
