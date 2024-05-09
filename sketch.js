let img;
let player;
let walls;
let playerAni;
let playerRun;
let bg;
let grassSheet;

// Constantes
const playerScale = 2

function preload() {
  img = loadImage('assets/me.jpg');
  playerIdle = loadAnimation('idle', 'assets/character/idle.png', { frameSize: [64, 64], frames: 4 });
  playerRun = loadAnimation('run', 'assets/character/run.png', { frameSize: [80, 80], frames: 8 }); // PORQUE BUGA COM 64 X 64 ?????????
  bg = loadImage('assets/background.png')
  grassSheet = loadImage('assets/grama.png')
  playerJump = loadAnimation('jump', 'assets/character/jump.png', { frameSize: [64, 64], frames: 15 });
  playerJump.frameDelay = 4;
}

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth/1.4, windowHeight/1.4);
  game()
}

function draw() {
  //Telas();
  clear();
  background(bg);

  //camera
  //camera.zoom = 2;
  //camera.x = player.x;
  //camera.y = player.y;

  // moving keys
  if(kb.pressing('a')){
    player.x -= 5
    player.scale.x = -playerScale
    player.changeAni('run');
  } else if (kb.pressing('d')) {
    player.x += 5
    player.scale.x = playerScale
    player.changeAni('run');
  } else {
    player.changeAni('idle');
  }

  if (kb.pressing('space') && (player.colliding(walls) || player.colliding(grass))) {
    player.vel.y = -5

  } else if(player.colliding(walls) || player.colliding(grass)) {
    player.vel.y = 0
    console.log("colidindo")
  } else {
    player.changeAni('jump');
  }

  if(player.colliding(end)) {
    player.x = 50;
    player.y = 500;
  }
}

function game() {
  allSprites.pixelPerfect = true;
  world.gravity.y = 10;
  player = new Sprite(50, 500);
  player.addAni(playerIdle);
  player.addAni(playerRun);
  player.addAni(playerJump);
  player.scale = playerScale
  player.rotationLock = true;
  player.removeColliders();
  //player.debug = true;
  player.addCollider(0, 0, 40, 125)

  //mapa
  walls = new Group();
  walls.w = 50;
  walls.h = 50;
  walls.tile = "=";
  walls.collider = 'static';

  grass = new Group();
  grass.collider = 'static';
  grass.spriteSheet = grassSheet;
  grass.addAni({ w:50, h:50});
  grass.tile = "g";

  end = new Group();
  end.collider = 'static'
  end.w = 50;
  end.h = 50
  end.tile = "%"

  new Tiles(
    [  
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'g............................g',
      'gggggggggggg.....ggggggggggggg',
      'g............................g',
      'g............................g',
      'g............................g',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )
}