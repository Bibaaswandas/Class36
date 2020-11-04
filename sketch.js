var database, canvas;
var gameState = 0;
var PlayerCount;
var form;
var game;
var player;
var allplayers;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
    background("white");

    if(PlayerCount === 4){
        game.update(1);
    }
    if(gameState===1){
        clear ();
        game.play();
    }
}




