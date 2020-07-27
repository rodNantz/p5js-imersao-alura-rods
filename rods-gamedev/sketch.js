
let imagemCenario;
let cenario;
let imgPersonagem;
let imgInimigo;
let imgTroll;
let imgVoador;
let personagem;
let somJogo;

const persoMatriz = [
  [0,0], [220,0], [440,0], [660,0],
  [0,270], [220,270], [440,270], [660,270],
  [0,540], [220,540], [440,540], [660,540],
  [0,810], [220,810], [440,810], [660,810],
];

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];

const matrizVoador = [
	  [0,0],
	  [200, 0],
	  [400, 0],
	  [0, 150],
	  [200, 150],
	  [400, 150],
	  [0, 300],
	  [200, 300],
	  [400, 300],
	  [0, 450],
	  [200, 450],
	  [400, 450],
	  [0, 600],
	  [200, 600],
	  [400, 600],
	  [0, 750],
];

const matrizTroll = [
	  [0,0],
	  [400,0],
	  [800,0],
	  [1200,0],
	  [1600,0],
	  [0,400],
	  [400,400],
	  [800,400],
	  [1200, 400],
	  [1600, 400],
	  [0,800],
	  [400, 800],
	  [800, 800],
	  [1200, 800],
	  [1600, 800],
	  [0, 1200],
	  [400, 1200],
	  [800, 1200],
	  [1200, 1200],
	  [1600, 1200], 
	  [0, 1600],
	  [400, 1600],
	  [800, 1600],
	  [1200, 1600],
	  [1600, 1600],
	  [0, 2000],
	  [400, 2000],
	  [800, 2000],
];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  imgInimigo = loadImage('imagens/inimigos/gotinha.png');
  imgVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imgTroll = loadImage('imagens/inimigos/troll.png');
  somJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  collideDebug(true);
  
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 15);
  personagem = new Personagem(persoMatriz, imgPersonagem,
                        0, 10,
                        110, 135,  220, 270);
  inimigo = new Inimigo(matrizInimigo, imgInimigo, 
                        width-52, 0,
                        52, 52,  104, 104,
                        100, 1);
  
  iniTroll = new Inimigo(matrizTroll, imgTroll, 
                        2*width-52, 0,
                        200, 200,  400, 400,
                        2000, .66);
  
  iniVoador = new Inimigo(matrizVoador, imgVoador, 
                        width-52, 10,
                        100, 75,  200, 150,
                        300, 1);
  
  frameRate(30);
  //somJogo.loop();
}

function draw() {
  //background(220);
  //background(imagemCenario);
  cenario.exibir();
  cenario.mover();
  
  personagem.exibir();
  personagem.applGravidade();
  checkKeyIsDown();

  inimigo.exibir();
  inimigo.mover();
  
  iniVoador.exibir();
  iniVoador.mover();
  
  iniTroll.exibir();
  iniTroll.mover();
  //circle(mouseX, mouseY, 50);
  
  if(personagem.estaColidindo(inimigo) ||
     personagem.estaColidindo(iniVoador) ||
     personagem.estaColidindo(iniTroll)
    ) {
      console.log("colidiu");
      noLoop();
  }

}


function keyPressed() {
  if (key === 'ArrowUp'){
    if (personagem.pula())
        somPulo.play();
  }
}

function mouseClicked() { 
  if (personagem != undefined && personagem.pula())
      somPulo.play();
}

//not a p5js function
function checkKeyIsDown(){
  if(keyIsDown(LEFT_ARROW))
    personagem.move(-10);

  if(keyIsDown(RIGHT_ARROW))
    personagem.move(10);
}
