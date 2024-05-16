const playerScale = 1;

function playerSet() {
    player = new Sprite(50, 500);
    player.addAni(playerIdle);
    player.addAni(playerRun);
    player.addAni(playerJump);
    player.scale = playerScale
    player.rotationLock = true;
    player.removeColliders();
    //player.debug = true;
    player.addCollider(0, 0, 30, 60);
  }