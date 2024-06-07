function mouseClicked() {
    if(mouseX >= width/2 - 125 && mouseX <= width/2 + 25 && mouseY >= 185 && mouseY <= 232) {
      if(TELA === MENU) {
        TELA = GAME;
        setup()
      }
    } else if (mouseX >= width/2 - 125 && mouseX <= width/2 + 25 && mouseY >= 247 && mouseY <= 292) {
      if(TELA === MENU) {
        TELA = CONTROLS;
      }
    } else if (mouseX >= width/2 - 125 && mouseX <= width/2 + 25 && mouseY >= 307 && mouseY <= 351) {
      if(TELA === MENU) {
        TELA = CREDITS;
      }
    } else if (mouseX >= 30 && mouseX <= 65 && mouseY >= 35 && mouseY <= 65) {
      if(TELA === GAME) {
        TELA = MENU;
      } else if(TELA === CONTROLS) {
        TELA = MENU;
      } else if(TELA === CREDITS) {
        TELA = MENU;
      }
    }
  }