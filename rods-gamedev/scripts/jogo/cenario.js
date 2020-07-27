class Cenario {

  constructor(img, veloc) {
    this.img = img;
    this.veloc = veloc;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibir(){
    image(this.img, this.x1,     0, width, height);
    image(this.img, this.x2 + 1, 0, width, height);
  }
  
  mover(){
    this.x1 = this.x1 - this.veloc;
    this.x2 = this.x2 - this.veloc;
    
    if (this.x1 < -width)
      this.x1 = width;
    if (this.x2 < -width)
      this.x2 = width;
  }
}