const MENU = 'menu';
const GAME = 'game';
const CONTROLS = 'controls';
const CREDITS = 'credits';
let TELA = MENU;

function Telas() {
  background("#6d8b89");
  rectMode(CENTER);
  textAlign(CENTER, CENTER)
  if(TELA === GAME) {
    fill("#d5e0b5")
    text('Em construção!', 250, 250);
    rect(50, 50, 30, 30, 5);
    fill("#47667b")
    text("<", 50, 50)
  } else if (TELA === CREDITS) {
    fill("#d5e0b5")
    rect(50, 50, 30, 30, 5);
    text("Desenvolvido por: \nRamon de Oliveira Araújo Mateus\nramon.mateus.017@ufrn.edu.br", 250, 250);
    text("Ideia: Jogo de plataforma", 250, 350);
    fill("#47667b")
    text("<", 50, 50)
    image(img, width/2-60, 85, 120, 120);
  } else if (TELA === CONTROLS) {
    fill("#d5e0b5")
    rect(50, 50, 30, 30, 5);
    text("Irá mostrar como os controles funcionam", 250, 250);
    fill("#47667b")
    text("<", 50, 50)
  } else {
    fill("#d5e0b5")
    text("Nome do jogo", 250, 100)
    rect(250, 210, 150, 45, 15);
    rect(250, 270, 150, 45, 15);
    rect(250, 330, 150, 45, 15);
    fill("#47667b")
    textSize(22)
    text("Jogar", 250, 210)
    text("Controles", 250, 270)
    text("Créditos", 250, 330)
  }
}