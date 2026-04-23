// classe Poligono
class Poligono {

    constructor(lati, lunghezza) {
        this.lati = lati;
        this.lunghezza = lunghezza;
    }

    // perimetro
    perimetro() {
        return this.lati * this.lunghezza;
    }

    // area (formula poligono regolare)
    area() {
        return (this.lati * this.lunghezza * this.lunghezza) / (4 * Math.tan(Math.PI / this.lati));
    }

    stampa() {
        console.log("Lati:", this.lati, "- Lunghezza lato:", this.lunghezza);
        console.log("Perimetro:", this.perimetro().toFixed(2));
        console.log("Area:", this.area().toFixed(2));
        console.log("------------------------");
    }
}


// ===== MAIN =====

let triangolo = new Poligono(3, 15);
let quadrato = new Poligono(4, 10);
let pentagono = new Poligono(5, 21);
let esagono = new Poligono(6, 18);
let ettagono = new Poligono(7, 9);
let ottagono = new Poligono(8, 12);

// stampa risultati
triangolo.stampa();
quadrato.stampa();
pentagono.stampa();
esagono.stampa();
ettagono.stampa();
ottagono.stampa();