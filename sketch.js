var player;
var player_right, player_left;
var fundo, ground;
var blocos;
var cenario;


function preload() {
  player_right = loadImage("./assets/mario-right.png")
  player_left = loadImage("./assets/mario-left.png")
  fundo = loadImage("./assets/fundo.jpeg")
}


function setup() {
  createCanvas(1280,720)
  
  player = createSprite(200,200,10,10)
  player.addImage(player_right)
  player.scale=0.1

  player.debug = true
  player.setCollider("rectangle",0,0,400,500)

  ground = createSprite(windowWidth/2, 680, windowWidth*6, 100)
  //ground.visible = false

  blocos = new Group()

  criarBlocos(335,513,30,30, "brown")
  criarBlocos(528,513,30,30, "brown")
  criarBlocos(528,513,162,30, "yellow")

  criarBlocos(735,570,60,15, 'blue')

}

function criarBlocos(x,y,l,a, cor) {
  var sprite = createSprite(x,y,l,a)
  sprite.shapeColor = cor
  //sprite.visible = false
  blocos.add(sprite)
}

function draw() {
  background("red");

  for (var i = 0; i<=3840; i=i+1280) {
    image(fundo,i,0,1280,720)
  }

  if(keyDown(RIGHT_ARROW) && player.position.x < 4900){
    player.addImage(player_right)
    player.position.x +=10
  }
  if(keyDown(LEFT_ARROW) && player.position.x > 140){
    player.addImage(player_left)
    player.position.x -=10
  }
  if( ( player.collide(ground) ||  player.collide(blocos) ) && keyDown("space")){  
    player.velocityY = -30
  }

  player.velocityY += 2

  if (camera.position.x < 4400) {
    camera.position.x = player.x+500
  }

  drawSprites()
}


