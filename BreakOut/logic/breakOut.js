function startGame() {

    document.getElementById("bounce").disabled = true;
    document.getElementById("multiplayer").disabled = true;
    draw();
}

function breakOutGameStart()  {
    document.getElementById("titel").innerHTML = "BreakOut"
    
    breakOutGame = true;
    twoPlayer = false;
    bounceGame = false;

    document.getElementById("breakOut").innerHTML = breakOutGame;
    document.getElementById("multiplayer").innerHTML = "Multiplayer";
    document.getElementById("bounce").innerHTML = "Bounce Ball";
}

function bounceGameStart() {

    document.getElementById("titel").innerHTML = "Bouncingball"

    bounceGame = true;
    twoPlayer = false;
    breakOutGame = false;

    document.getElementById("breakOut").innerHTML = "Break Out";
    document.getElementById("multiplayer").innerHTML = "Multiplayer";
    document.getElementById("bounce").innerHTML = bounceGame;
}

function switchMultiplayer() {

    document.getElementById("titel").innerHTML = "Pong"

    twoPlayer = true;
    bounceGame = false;
    breakOutGame = false;

    document.getElementById("breakOut").innerHTML = "Break Out";
    document.getElementById("bounce").innerHTML = "Bounce Ball";
    document.getElementById("multiplayer").innerHTML = twoPlayer;

    input = true; //Steuerung für 2 player aktivieren
}

function openSettings() {
  //disable Canvas
  //disable Buttons
  //draw Menu Settings
}

function sleep(millsec) {

    var now = new Date().getTime();
    while (new Date().getTime() < now + millsec) {
        //nothing to do...just wait
    }
}
