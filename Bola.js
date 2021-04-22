class Bola{
constructor(){
    this.x = random (0,800);
    this.y = random (0,200);
    this.type = int (random (3))
    }
mostrar(){ //bolitas rojas que caen
    noStroke();
    fill(255,0,0);
    circle(this.x, this.y,30);
    }    
mostrarAtrapada (refX, refY){ // bolitas verdes organizadas
    noStroke();
    fill(0,255,0);
    circle(refX,refY,20);
    }
mover(){ //caen
    this.y++;
    if (this.y > 800){
        this.x = random (0, 800);
        this.y = random (-150, 0);
        }
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}