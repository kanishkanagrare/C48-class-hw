var welcomeimg, welcome, board, boardimg, chit, chitimg;
var playbutton, playbuttonimg, instructions, instructionsimg;
var oneimg, twoimg, threeimg, fourimg, fiveimg, siximg;
var diceButton, dices, cards;
var pl1, pl2;

function preload(){
welcomeimg=loadImage("welcomeScreen/welcomescreen.jpg");
playbuttonimg=loadImage("welcomeScreen/playbutton.png");
boardimg=loadImage("welcomeScreen/cluetho.png");
instructionsimg=loadImage("welcomeScreen/Instructionz.PNG");
chitimg=loadImage("welcomeScreen/chit.jpg");
oneimg=loadImage("dice/one.png");
twoimg=loadImage("dice/two.png");
threeimg=loadImage("dice/three.png");
fourimg=loadImage("dice/four.png");
fiveimg=loadImage("dice/five.png");
siximg=loadImage("dice/six.png");

}

function setup() {
  createCanvas(1000, 500);
  welcome=createSprite(500, 250, 1000, 500);
  welcome.addImage("welcome", welcomeimg);

  playbutton=createSprite(500, 450, 20, 20);
  playbutton.addImage("play", playbuttonimg);
  playbutton.scale=0.3;

  instructions=createSprite(500,150, 800, 125);
  instructions.addImage("ins", instructionsimg);

}


function draw() {

  if(mousePressedOver(playbutton)){
    board=createSprite(300,250,200,200);
    board.addImage("board", boardimg);
    board.scale=0.9;


    chit=createSprite(760, 214, 300, 350);
    chit.addImage("chit", chitimg);
    chit.scale=0.4;

    diceButton=createSprite(850, 450, 40, 40);
  
    pl1=createSprite(150,50,20,20);
    pl1.shapeColor='red';
  
  }

  spawnDices();
  drawSprites();

}

function spawnDices(){
  if(mousePressedOver(diceButton)){
      var dices= createSprite(850, 450, 40, 40);
      var rand = Math.round(random(1,6));
      switch(rand){
        case 1: dices.addImage("ONE", oneimg)
        break
        case 2: dices.addImage("ONE", twoimg)
        break
        case 3: dices.addImage("ONE", threeimg)
        break
        case 4: dices.addImage("ONE", fourimg)
        break
        case 5: dices.addImage("ONE", fiveimg)
        break
        case 6: dices.addImage("ONE", siximg)
        break
      }
      dices.scale=0.2;
    }
}
