let img;
let player;
let walls;
let playerAni;

// Constantes
const playerScale = 2

function preload() {
  img = loadImage('assets/me.jpg');
  playerAni = loadAnimation('assets/character/idle.png', { frameSize: [64, 64], frames: 4 });
}

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  game()
}

function draw() {
  //Telas();
  //clear();
  background("#6d8b89");

  //camera
  //camera.zoom = 2;
  //camera.x = player.x;
  //camera.y = player.y;

  // moving keys
  if(kb.pressing('a')){
    player.x -= 5
    player.scale.x = -playerScale
  } else if (kb.pressing('d')) {
    player.x += 5
    player.scale.x = playerScale
  }
  
  if (kb.pressing('space') && player.colliding(walls) ) {
    player.vel.y = -5
  } else if(player.colliding(walls)) {
    player.vel.y = 0
  }
}

function game() {
  world.gravity.y = 10;
  player = new Sprite();
  player.addAni(playerAni);
  player.scale = playerScale

  //mapa
  walls = new Group()
  walls.w = 50
  walls.h = 50
  walls.tile = "="
  walls.collider = 'static'

  new Tiles(
    [  
      '======================'
    ],
    0,
    700,
    walls.w,
    walls.h
  )
}