class Inimigo extends Animacao {

  constructor(matriz, imagem, 
              x, variacaoY, 
              largura, altura, larguraSprite, alturaSprite, 
              delay, collidePct) 
        {
        super(matriz, imagem, x, variacaoY, largura, altura, 
              larguraSprite, alturaSprite);
        this.delay = delay;
        this.veloc = 10;
        this.x = width + this.delay;
        this.collidePct = collidePct;
        this.yCounter = 99999;
        this.yRandom = this.getYRandom();
  }
  
  mover(){
    this.x = this.x - this.veloc;
    
    if (this.x < -this.largura - this.delay) 
      this.x = width;

    this.y = this.y - this.getYRandom();
    
    if(this.y > this.yIni - this.altura)
      this.y = this.yIni - this.altura;
    if(this.y < 0)
      this.y = 0;
  }

  getYRandom() {
    // do at least 100 steps on same direction
    if (this.yCounter > 10) {
      this.yRandom = Math.random() >= 0.5 ? this.variacaoY : -this.variacaoY;
      this.yCounter = 0;
    }
    this.yCounter++;
    return this.yRandom;
  }
}