function creaAnimale(nome, specie, eta) {
    return {
        nome, specie, eta,
        mangia: () => console.log(`${nome} sta mangiando`),
        dorme: () => console.log(`${nome} sta dormendo`),
        enumera: function() {
            console.log("Attributi Animale:", Object.keys(this));
        }
    };
}

function creaAutomobile(marca, modello, km) {
    return {
        marca, modello, km,
        avvia: () => console.log(`${marca} ${modello} avviata`),
        frena: () => console.log(`${marca} ${modello} frena`),
        enumera: function() {
            console.log("Attributi Automobile:", Object.keys(this));
        }
    };
}

function creaPoligono(lati, colore, area) {
    return {
        lati, colore, area,
        ruota: () => console.log(`Poligono ${lati} lati ruota`),
        scala: () => console.log("Poligono scalato"),
        enumera: function() {
            console.log("Attributi Poligono:", Object.keys(this));
        }
    };
}

// Main
console.log("=== ESERCIZIO JS_12 ===\n");

console.log("ANIMALI:");
const cane1 = creaAnimale("Rex", "Cane", 3);
const cane2 = creaAnimale("Fido", "Cane", 5);
cane1.enumera();
cane2.enumera();

console.log("\nAUTOMOBILI:");
const auto1 = creaAutomobile("Fiat", "Panda", 15000);
const auto2 = creaAutomobile("VW", "Golf", 8000);
auto1.enumera();
auto2.enumera();

console.log("\nPOLIGONI:");
const triangolo1 = creaPoligono(3, "rosso", 10);
const triangolo2 = creaPoligono(3, "blu", 15);
triangolo1.enumera();
triangolo2.enumera();
