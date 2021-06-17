var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var ballX = canvas.width / 2;
var ballY = canvas.height - 30;
var dx = 2;
var dy = -3;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

const brickRowCount = 7;
var brickColumnCount = 4;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var moveStep = 7;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var score = 0;
var lives = 3;

var twoPlayer = false;
var paddleTwoHeight = 10;
var paddleTwoWidth = 75;
var paddleTwoX = (canvas.width - paddleWidth) / 2;
var points = [0, 0];
var winPoints = 10;
var input = false;  //mousecontrol for player 2

var bounceGame = false;
var bounceScore = 0;

var breakOutGame = true;

document.getElementById("menubar").style.height = 10;
