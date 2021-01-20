class Player{
    contructor(){
this.index=null
this.distance=0
this.name=null
    }
getCount(){
    var playerCountref=database.ref('playerCount')
    playerCountref.on("value",(data)=>{
        playerCount=data.val()
    })
}
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
static getPlayerinfo(){
    var playerInforef=database.ref('players')
    playerInforef.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}