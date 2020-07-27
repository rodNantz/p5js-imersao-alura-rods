// a bruxinha
class Personagem extends Animacao {

  constructor(matriz, img, x, variacaoY, largura, altura, 
              larguraSprite, alturaSprite) {  
        super(matriz, img, x, variacaoY, largura, altura, 
              larguraSprite, alturaSprite);
        
        this.frameAtual = 0;
        this.yIni = this.y;
        this.velPulo = 0;
        this.cntPulo = 0;
        this.gravidade = 3;
        this.precisao = .66;
  }

  
  pula() {
    if (this.pulo < 2){
      console.log('pulou');
      this.pulo++;
      this.velPulo = -30;    // pra cima
      return true;
    } 
    return false;
  }
  
  move(qtde) {
    this.x += qtde;
    if (this.x < 0 )
      this.x = 0;
    if (this.x > width)
      this.x = width;
  }

  applGravidade() {
    this.y += this.velPulo;
    this.velPulo += this.gravidade;    // pra baixo
    
    // do chão n passa
    if(this.y > this.yIni){
      this.y = this.yIni;
      this.pulo = 0;
    }
  }
  
  estaColidindo(inim){
    return this.doCollideRectRect(this.x + this.largura/4, 
                                  this.y + this.altura/5, 
                                  this.largura - this.largura/2, 
                                  this.altura - this.altura/3,
                                  // inim
                                  inim.x + inim.largura/2,
                                  inim.y + inim.altura/3,
                                  inim.largura - inim.largura/2, 
                                  inim.altura - inim.altura/5,
                                  true);         //debug?
  }
  
  doCollideRectRect(pX, pY, pLar, pAlt, iX, iY, iLar, iAlt, debugDraw){
    if(debugDraw){
      noFill();
      rect(pX, pY, pLar, pAlt);
      rect(iX, iY, iLar, iAlt);
    }
    
    return collideRectRect(pX, pY, pLar, pAlt, iX, iY, iLar, iAlt);
  }

}
  