let img;
let player;
let walls;

function preload() {
  img = loadImage('assets/me.jpg');
}

function setup() {
  //createCanvas(500, 500);
  createCanvas(1000, 500);
  game()
}

function draw() {
  //Telas();
  clear();
  background("#6d8b89");

  //camera
  //camera.zoom = 2;
  //camera.x = player.x;
  //camera.y = player.y;

  // moving keys
  if(kb.pressing('a')){
    player.x -= 5
  } else if (kb.pressing('d')) {
    player.x += 5
  }
  
  if (kb.pressing('space') && player.colliding(walls) ) {
    player.vel.y = -5
  }
}

function game() {
  world.gravity.y = 10;
  player = new Sprite(100, 100, 32, 33);
  player.color = "red";

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
    500,
    walls.w,
    walls.h
  )
}