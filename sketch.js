var form,player,game,gameState=0,playerCount,allPlayers,distance=0
var database,position
function setup(){
    createCanvas(500,500);
    database=firebase.database()
   game=new Game()
   game.getState()
   game.start()
}

function draw(){
    if(playerCount==4){
        gameState=1
    }if(gameState==1){
        clear()
        game.play()
    }
}

