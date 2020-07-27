// classe para personagem principal e também inimigos

class Animacao {
  
  constructor(matriz, img, x, variacaoY, largura, altura, 
              larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.img = img;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }

  
  exibir(){
    image(this.img, this.x, this.y, 
          this.largura, this.altura, 
          this.matriz[this.frameAtual][0], 
          this.matriz[this.frameAtual][1], 
          this.larguraSprite, this.alturaSprite);
    this.animar();
  }
  
  
  animar(){
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
  
}