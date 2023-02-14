var player, form, game, playerTeam;
var Arrow_selectImg, Flash_selectImg;

var Supergirl_selectImg, Firestorm_selectImg; 
var Atom_selectImg, character_select, sprite;
var gameState=0;
var bgImg;


function preload(){
  Arrow_selectImg = loadImage("./assets/Arrow_select.png");
  Flash_selectImg = loadImage("./assets/Flash_select.png");
  Supergirl_selectImg = loadImage("./assets/Supergirl_select.png");
  Firestorm_selectImg = loadImage("./assets/Firestorm_select.png");
  Atom_selectImg = loadImage("./assets/Atom_select.png");
  bgImg = loadImage("./assets/bg.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  sprite = createSprite(width/2 - 120, height/2+200);

edges = createEdgeSprites()

  form = new Form()
  form.display() 
  
  game = new Game()
}

function draw(){

  if (gameState == 1) {
    game.start();
  }
  
//console.log(gameState)
}