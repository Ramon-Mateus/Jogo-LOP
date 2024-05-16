function mapSet() {
    allSprites.pixelPerfect = true;
    world.gravity.y = 10;
    textSize(22)
  
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
    placa.scale = 0.1;
    placa.tile = "p";
  
  
    end = new Group();
    end.collider = 'static'
    end.color = color(0, 0, 0, 0);
    end.draw = function() {
      noStroke();
    }
    end.w = 50;
    end.h = 50;
    end.tile = "%";
  
    tl = new Group();
    tl.collider = 'static';
    tl.color = color(0, 0, 0, 0);
    tl.draw = function() {
      noStroke();
    }
    tl.w = 50;
    tl.h = 50;
    tl.tile = "#";

    coins = new Group();
    coins.collider = 'static';
    coins.w = 50;
    coins.h = 50;
    coins.tile = "c";

    FloorFal = new Group();
    FloorFal.collider = 'static';
    FloorFal.w = 100;
    FloorFal.h = 5;
    FloorFal.tile = 'f'
  }