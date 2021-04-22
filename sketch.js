let bolas = []; //bolitas atrapadas
let colector = new Colector(400, 600);

function setup() {
  createCanvas(800, 800);
  for (let index = 0; index<20; index++){
    bolas.push(new Bola());
  }
}

function draw() {
  background(255);
  colector.mostrar();
  for (let index = 0; index < bolas.length; index++){
    let current = bolas[index];
    current.mostrar();
    current.mover();
    if (colector.verificarContacto(current)){
      colector.agregar(current);
      bolas.splice(index,1)
    }
  }
}

function moverMouse() {
  colector.setX(mouseX);
}
