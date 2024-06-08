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

    areia = new Group();
    areia.collider = 'static';
    areia.spriteSheet = areiaSheet;
    areia.addAni({ w:50, h:50});
    areia.tile = "a";
  
    placa2 = new Group();
    placa2.collider = 'none';
    placa2.spriteSheet = placa2Sheet;
    placa2.addAni({ w:512, h:512});
    placa2.scale = 0.1;
    placa2.tile = "p";

    placa3 = new Group();
    placa3.collider = 'none';
    placa3.spriteSheet = placa3Sheet;
    placa3.addAni({ w:512, h:512});
    placa3.scale = 0.1;
    placa3.tile = "o";

    placa4 = new Group();
    placa4.collider = 'none';
    placa4.spriteSheet = placa4Sheet;
    placa4.addAni({ w:512, h:512});
    placa4.scale = 0.1;
    placa4.tile = "i";
    
    placaSpace = new Group();
    placaSpace.collider = 'none';
    placaSpace.spriteSheet = placaSpaceSheet;
    placaSpace.addAni({ w:512, h:512});
    placaSpace.scale = 0.2;
    placaSpace.tile = "s";
    
    end = new Group();
    end.collider = 'none';
    end.spriteSheet = endSheet;
    end.addAni({ w:512, h:512});
    end.scale = 0.1;
    end.tile = "e";

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
    coins.spriteSheet = coinSheet;
    coins.addAni({ w:512, h:512});
    coins.scale = 0.1;
    coins.w = 50;
    coins.h = 50;
    coins.tile = "c";

    FloorFal = new Group();
    FloorFal.collider = 'static';
    FloorFal.rotationLock = true;
    FloorFal.falling = false;
    FloorFal.w = 100;
    FloorFal.h = 5;
    FloorFal.tile = 'f'
  }