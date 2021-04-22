class Colector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bolas = []; //verdes atrapadas
        this.radio = 25;
    }

    verificarContacto(bola) {
        if (dist(bola.getX(), bola.getY(), this.x, this.y) < this.radio) {
            return true;
        }
        return false;
    }

    mostrar() { 
        //verdes atrapadas
        let dx = this.x + 35;
        let dy = this.y;
        for (let index = 0; index < this.bolas.length; index++) {
                this.bolas[index].mostrarAtrapada(dx, dy);
            dx += 25;
        } 
        //bolita negra que colecta
        noStroke();
        fill(0);
        circle(this.x, this.y, this.radio * 2);
    }

    agregar(bola) {
        this.bolas.push(bola);
    }

    setX(x) {
        this.x = x;
    }
}