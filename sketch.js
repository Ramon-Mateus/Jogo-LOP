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
let coinSheet;
let vida = 3;
let pontos = 0;
let fx = [];
let fy = [];
let showGameOver = false;

function preload() {
  img = loadImage('assets/me.jpg');
  //bgSong = loadSound('assets/bg.wav');
  playerIdle = loadAnimation('idle', 'assets/character/idle.png', { frameSize: [64, 64], frames: 4 });
  playerRun = loadAnimation('run', 'assets/character/run.png', { frameSize: [80, 80], frames: 8 }); // PORQUE BUGA COM 64 X 64 ?????????
  bg = loadImage('assets/background.png');
  grassSheet = loadImage('assets/grama.png');
  placaSheet = loadImage('assets/placa.png');
  coinSheet = loadImage('assets/coin.png');
  playerJump = loadAnimation('jump', 'assets/character/jump.png', { frameSize: [64, 64], frames: 15 });
  playerJump.frameDelay = 4;
}

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth/1.4, windowHeight/1.4);
  mapSet();
  FirstLevel();
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
    player.x -= 5;
    player.scale.x = -playerScale;
    player.changeAni('run');
  } else if (kb.pressing('d')) {
    player.x += 5;
    player.scale.x = playerScale;
    player.changeAni('run');
  } else {
    player.changeAni('idle');
  }

  if (kb.pressing('space') && (player.colliding(walls) || player.colliding(grass) || player.colliding(FloorFal))) {
    player.vel.y = -5;

  } else if(player.colliding(walls) || player.colliding(grass) || player.colliding(FloorFal)) {
    player.vel.y = 0;
  } else {
    player.changeAni('jump');
  }

  if(player.colliding(end)) {
    player.x = 50;
    player.y = 500;
    vida--;
    if(vida === 0) {
      player.remove();
      vida = 3;
      pontos = 0;
      tileMap.remove();
      FirstLevel();
      showGameOver = true;
      gameOverTimer = millis();
    }
  }

  if (showGameOver) {
    text('Game Over - Jogo resetado', width / 2 - 150, 100);
    if (millis() - gameOverTimer > 2000) showGameOver = false;
  }

  if(player.colliding(tl)) {
    LevelTwo();
  }

  for (let i = 0; i < coins.length; i++) {
    if (player.collide(coins[i])) {
        coins[i].remove();
        pontos++;
        break;
    }
  }

  for (let l = 0; l < FloorFal.length; l++) {
    if (player.collide(FloorFal[l]) && FloorFal[l].collider !== "dynamic" && !FloorFal[l].falling) {
      fx[l] = FloorFal[l].x;
      fy[l] = FloorFal[l].y;
      FloorFal[l].falling = true;
      setTimeout(() => {
        FloorFal[l].collider = 'dynamic';
      }, 300);
      break;
    } else if (FloorFal[l].overlap(end)) {
      setTimeout(() => {
        FloorFal[l].position.x = fx[l];
        FloorFal[l].position.y = fy[l];
        FloorFal[l].collider = 'static';
        FloorFal[l].falling = false;
        FloorFal[l].rotation = 0;
        FloorFal[l].rotationSpeed = 0;
      }, 1000);
    }
  }

  text("Vidas: " + vida, 30, 40);
  text("Pontos: " + pontos, 30, 70);
}

function FirstLevel() {
  clear();
  tileMap = new Tiles(
    [  
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=..........................................................................#..........',
      '=...........................cc.........................c.c......c..........#..........',
      '=........c...........c..c.......c................c......................p..#..........',
      '=ggggggggggg.....ggggggggggggggggg....f....f...ggggggggggggggggggggggggggggggggggggggg',
      '=.....................................................................................',
      '=.....................................................................................',
      '=.....................................................................................',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
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
  
  tileMap.remove();
  tileMap = new Tiles(
    [
      '=....................................................................#',
      '=....................................................................#',
      '=....................................................................#',
      '=....................................................................#',
      '=....................................................................#',
      '=....................................................................#',
      '=...........................................cc.......................#',
      '=..........................................gggg......................#',
      '=.....................................f....gggg......................#',
      '=................................f...................................#',
      '=.......c.c.c...............f........................................#',
      '=................ggg...f.............................................#',
      '=ggggggggggggggggggg.................................gggggggggggggggg#',
      '=....................................................................#',
      '=....................................................................#',
      '=....................................................................#',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )

  playerSet();
}
