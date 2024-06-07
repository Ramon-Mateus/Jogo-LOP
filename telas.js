const MENU = 'menu';
const GAME = 'game';
const CONTROLS = 'controls';
const CREDITS = 'credits';
let TELA = MENU;

function Telas() {
  background("#6d8b89");
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  if(TELA === GAME) {
    text("<", 50, 50) // COLOCAR ISSO NA TELA DO GAME
  } else if (TELA === CREDITS) {
    fill("#d5e0b5")
    rect(50, 50, 30, 30, 5);
    text("Desenvolvido por: \nRamon de Oliveira Araújo Mateus\nramon.mateus.017@ufrn.edu.br", width/2 - 50, height/2 - 50);
    text("Ideia: Jogo de plataforma", width/2 - 50, height + 50);
    fill("#47667b")
    text("<", 50, 50)
    image(img, width/2 - 110, 85, 120, 120);
  } else if (TELA === CONTROLS) {
    fill("#d5e0b5")
    rect(50, 50, 30, 30, 5);
    text("Irá mostrar como os controles funcionam", width/2 - 50, height/2 - 50);
    fill("#47667b")
    text("<", 50, 50)
  } else {
    fill("#d5e0b5")
    text("Nome do jogo", width/2 - 50, 100)
    rect(width/2 - 50, 210, 150, 45, 15);
    rect(width/2 - 50, 270, 150, 45, 15);
    rect(width/2 - 50, 330, 150, 45, 15);
    fill("#47667b")
    textSize(22)
    text("Jogar", width/2 - 50, 210)
    text("Controles", width/2 - 50, 270)
    text("Créditos", width/2 - 50, 330)
    console.log(width/2 - 50)
  }
}