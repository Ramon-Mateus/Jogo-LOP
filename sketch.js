// variáveis
let img;
let player;
let walls;
let playerAni;
let playerRun;
let bg;
let grassSheet;
let areiaSheet;
//let bgSong;
let tileMap;
let placa2Sheet, placa3Sheet, placa4Sheet, placaSpaceSheet, endSheet;
let coinSheet;
let vida = 3;
let pontos = 0;
let fx = [];
let fy = [];
let showGameOver = false;
let showGameWin = false;
let level = 1;

function preload() {
  img = loadImage('assets/me.jpg');
  //bgSong = loadSound('assets/bg.wav');
  playerIdle = loadAnimation('idle', 'assets/character/idle.png', { frameSize: [64, 64], frames: 4 });
  playerRun = loadAnimation('run', 'assets/character/run.png', { frameSize: [80, 80], frames: 8 });
  bg = loadImage('assets/background.png');
  grassSheet = loadImage('assets/grama.png');
  areiaSheet = loadImage('assets/areia.png');
  placa2Sheet = loadImage('assets/placa.png');
  placa3Sheet = loadImage('assets/placa3.png');
  placa4Sheet = loadImage('assets/placa4.png');
  placaSpaceSheet = loadImage('assets/placaSpace.png');
  endSheet = loadImage('assets/end.png');
  coinSheet = loadImage('assets/coin.png');
  playerJump = loadAnimation('jump', 'assets/character/jump.png', { frameSize: [64, 64], frames: 15 });
  playerJump.frameDelay = 4;
}

function setup() {
  createCanvas(windowWidth/1.4, windowHeight/1.4);
  if(TELA === GAME) {
    mapSet();
    FirstLevel();
  }
}

function draw() {
  if(TELA === GAME) {
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

    if(showGameWin) {
      text(`Parabéns!!! Jogo zerado\nSua Pontuação: ${pontos}`, width / 2, 100);
    }

    if(player.colliding(tl)) {
      if(level === 1) {
        LevelTwo();
        level = 2;
      } else if(level === 2) {
        LevelThree();
        level = 3;
      } else if(level === 3){
        LevelFour();
        level = 4;
      } else {
        showGameWin = true;
      }
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

    fill(0)
    text("Vidas: " + vida, 50, 40);
    text("Pontos: " + pontos, 57.5, 70);
  } else {
    Telas();
  }
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
      '=aaaaaaaaaaa.....aaaaaaaaaaaaaaaaa.............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      '=aaaaaaaaaaa.....aaaaaaaaaaaaaaaaa.............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      '=aaaaaaaaaaa.....aaaaaaaaaaaaaaaaa.............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
      '=.....................................f....aaaa......................#',
      '=................................f.........aaaa......................#',
      '=.......c.c.c...............f..............aaaa......................#',
      '=................ggg...f...................aaaa...........cc......o..#',
      '=ggggggggggggggggaaa.......................aaaa......gggggggggggggggg#',
      '=aaaaaaaaaaaaaaaaaaa.......................aaaa......aaaaaaaaaaaaaaaa#',
      '=aaaaaaaaaaaaaaaaaaa.......................aaaa......aaaaaaaaaaaaaaaa#',
      '=aaaaaaaaaaaaaaaaaaa.......................aaaa......aaaaaaaaaaaaaaaa#',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )

  playerSet();
}

function LevelThree() {
  clear();
  player.remove();
  
  tileMap.remove();
  tileMap = new Tiles(
    [
      '=................................................................................#',
      '=................................................................................#',
      '=................................................................................#',
      '=................................................................................#',
      '=................................................................................#',
      '=................................................................................#',
      '=.....................................................ccccccc.............c...i..#',
      '=...................................................gggggggggg......ggggggggggggg#',
      '=...................................................aaaaa.........ggaaaaaaaaaaaaa#',
      '=..............................................................gggaaaaaaaaaaaaaaa#',
      '=..............c...........................................ggggaaaaaaaaaaaaaaaaaa#',
      '=.....c......c...c...............................f..gggggggaaaaaaaaaaaaaaaaaaaaaa#',
      '=gggggggg...ggggggg....f.....................f......aaaaaaaaaaaaaaaaaaaaaaaaaaaaa#',
      '=aaaaaaaa...aaaaaaa........f............f...........aaaaaaaaaaaaaaaaaaaaaaaaaaaaa#',
      '=aaaaaaaa...aaaaaaa............f...f................aaaaaaaaaaaaaaaaaaaaaaaaaaaaa#',
      '=aaaaaaaa...aaaaaaa.................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaa#',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )

  playerSet();
}

function LevelFour () {
  clear();
  player.remove();
  
  tileMap.remove();
  tileMap = new Tiles(
    [
      '=..............................................................................#...',
      '=..............................................................................#...',
      '=..............................................................................#...',
      '=..............................................................................#...',
      '=..............................................................................#...',
      '=........................................................g.....................#...',
      '=.......g....g...........................................g.....................#...',
      '=.......g....agg.........................................g.....................#...',
      '=.......g....aaagg.......................................g.....................#...',
      '=.......g....aaaaagg...c.................................g.....................#...',
      '=.......g....aaaaaaagg......c.....................ccc....g....................e#...',
      '=.....s.g....aaaaaaaaaggggggggggg....f.....f....gggggggggg........ggggggggggggggggg',
      '=gggggggg....aaaaaaaaaaaaaaaaaaaa...............aaaaaaaaaa........aaaaaaaaaaaaaaaaa',
      '=aaaaaaaa....aaaaaaaaaaaaaaaaaaaa...............aaaaaaaaaa........aaaaaaaaaaaaaaaaa',
      '=aaaaaaaa....aaaaaaaaaaaaaaaaaaaa...............aaaaaaaaaa........aaaaaaaaaaaaaaaaa',
      '=aaaaaaaa....aaaaaaaaaaaaaaaaaaaa...............aaaaaaaaaa........aaaaaaaaaaaaaaaaa',
      '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
    ],
    -30,
    0,
    end.w,
    end.h
  )

  playerSet();
}