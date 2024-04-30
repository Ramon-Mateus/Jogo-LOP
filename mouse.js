function mouseClicked() {
    if(mouseX >= 175 && mouseX <= 325 && mouseY >= 185 && mouseY <= 232) {
      if(TELA === MENU) {
        TELA = GAME;
      }
    } else if (mouseX >= 175 && mouseX <= 325 && mouseY >= 247 && mouseY <= 292) {
      if(TELA === MENU) {
        TELA = CONTROLS;
      }
    } else if (mouseX >= 175 && mouseX <= 325 && mouseY >= 307 && mouseY <= 351) {
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