// variáveis
let img;
let player;
let walls;
let playerAni;
let playerRun;
let bg;
let grassSheet;
//let bgSong;
let tileMap;
let placaSheet;

// Constantes
const playerScale = 1

function preload() {
  img = loadImage('assets/me.jpg');
  //bgSong = loadSound('assets/bg.wav');
  playerIdle = loadAnimation('idle', 'assets/character/idle.png', { frameSize: [64, 64], frames: 4 });
  playerRun = loadAnimation('run', 'assets/character/run.png', { frameSize: [80, 80], frames: 8 }); // PORQUE BUGA COM 64 X 64 ?????????
  bg = loadImage('assets/background.png')
  grassSheet = loadImage('assets/grama.png')
  placaSheet = loadImage('assets/placa.png')
  playerJump = loadAnimation('jump', 'assets/character/jump.png', { frameSize: [64, 64], frames: 15 });
  playerJump.frameDelay = 4;
}

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth/1.4, windowHeight/1.4);
  FirstLevel()
}

function draw() {
  //Telas();
  clear();
  background(bg);

  //camera
  camera.zoom = 2;
  camera.x = player.x;
  camera.y = player.y;

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
  } else {
    player.changeAni('jump');
  }

  if(player.colliding(end)) {
    player.x = 50;
    player.y = 500;
  }

  if(player.colliding(tl)) {
    LevelTwo();
  }
}

function FirstLevel() {
  allSprites.pixelPerfect = true;
  //bgSong.loop();
  world.gravity.y = 10;

  //mapa
  walls = new Group();
  walls.w = 50;
  walls.h = 50;
  walls.color = color(0, 0, 0, 0);
  walls.draw = function() {
    noStroke();
  }
  walls.tile = "=";
  walls.collider = 'static';

  grass = new Group();
  grass.collider = 'static';
  grass.spriteSheet = grassSheet;
  grass.addAni({ w:50, h:50});
  grass.tile = "g";

  placa = new Group();
  placa.collider = 'none';
  placa.spriteSheet = placaSheet;
  placa.addAni({ w:512, h:512});
  placa.scale = 0.1
  placa.tile = "p";


  end = new Group();
  end.collider = 'static'
  end.color = color(0, 0, 0, 0);
  end.draw = function() {
    noStroke();
  }
  end.w = 50;
  end.h = 50
  end.tile = "%"

  tl = new Group();
  tl.collider = 'static'
  tl.color = color(0, 0, 0, 0);
  tl.draw = function() {
    noStroke();
  }
  tl.w = 50;
  tl.h = 50
  tl.tile = "#"

  tileMap = new Tiles(
    [  
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '=.....................................................p.#',
      '=ggggggggggg.....gggggggggggggggggggggggggggggggggggggggggggggggggg',
      '=.......................................................#',
      '=.......................................................#',
      '=.......................................................#',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )

  playerSet();
}

function LevelTwo() {
  clear();
  player.remove();
  playerSet();
  
  tileMap.remove();
  tileMap = new Tiles(
    [  
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g............................#',
      'g...........gggg.............#',
      'ggggggggggggggggggggggggggggg#',
      'g............................#',
      'g............................#',
      'g............................#',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )
}

function playerSet() {
  player = new Sprite(50, 500);
  player.addAni(playerIdle);
  player.addAni(playerRun);
  player.addAni(playerJump);
  player.scale = playerScale
  player.rotationLock = true;
  player.removeColliders();
  //player.debug = true;
  player.addCollider(0, 0, 30, 60)
}