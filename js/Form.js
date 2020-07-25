class Form{
  constructor(){
      this.input = createInput('name') ;
      this.button = createButton('play');
      this.title = createElement('h2');;
      this.greeting = createElement('h3');
      this.reset = createButton('reset');

      this.playerRank1 = createElement('h3');
      this.playerRank2 = createElement('h3');
      this.playerRank3 = createElement('h3');
      this.playerRank4 = createElement('h3');
  }
  display(){

      this.title.html("Car Racing Game");
      this.title.position((displayWidth - 250) /2, 80);   
      
      this.input.position((displayWidth - 250) /2, displayHeight/3);

      this.button.position((displayWidth - 250) /2, displayHeight/2);

      this.reset.position(displayWidth - 250,40);

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount ++ ;
          player.index = playerCount;

          player.update();

          player.updateCount(playerCount);

          this.greeting.html("hello " + player.name);
          this.greeting.position((displayWidth - 250) /2, displayHeight/2)
      });

      this.reset.mousePressed(()=>{
          game.update(0);
          player.updateCount(0); 
          carsAtEnd.updateCarsAtEnd(0);   
      })
  }
  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
  }

   showRank(){
    if(gameState == 2 && playerCount === 4){
      background("white");

      for (var property in allPlayers) { 

        console.log(allPlayers);
          
        if( allPlayers[property].rank == 1){
          this.playerRank1.html("1 : " + allPlayers[property].name);
          this.playerRank1.position((displayWidth - 250) / 2, 380);
        }
        
        if(allPlayers[property].rank == 2){
          this.playerRank2.html("2 : " + allPlayers[property].name);
          this.playerRank2.position((displayWidth - 250) / 2, 420);
        }
        
        if(allPlayers[property].rank == 3){
          this.playerRank3.html("3 : " + allPlayers[property].name);
          this.playerRank3.position((displayWidth - 250) / 2, 460);
        }
        
        if(allPlayers[property].rank == 4){
          this.playerRank4.html("4 : " + allPlayers[property].name);
          this.playerRank4.position((displayWidth - 250) / 2, 500);
        }
        console.log(allPlayers[property].rank); }
       //console.log(allPlayers);
     }
  }
}

  