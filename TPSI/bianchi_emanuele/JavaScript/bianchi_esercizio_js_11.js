// Funzione costruttore per Automobile
function creaAutomobile(marca, modello, anno, colore, km) {
    return {
        marca: marca,
        modello: modello,
        anno: anno,
        colore: colore,
        km: km,
        
        // Metodo 1: Avvia motore
        avviaMotore: function() {
            console.log(`${this.marca} ${this.modello} avviato!`);
        },
        
        // Metodo 2: Mostra info
        mostraInfo: function() {
            console.log(`Auto: ${this.marca} ${this.modello} (${this.anno})`);
            console.log(`Colore: ${this.colore}, KM: ${this.km}`);
        },
        
        // Metodo 3: Aggiungi km
        guida: function(kmAggiuntivi) {
            this.km += kmAggiuntivi;
            console.log(`Guidato ${kmAggiuntivi}km. Totale: ${this.km}km`);
        }
    };
}

// Main
const auto1 = creaAutomobile("Fiat", "Panda", 2020, "Bianca", 15000);
const auto2 = creaAutomobile("Volkswagen", "Golf", 2022, "Nera", 8000);
const auto3 = creaAutomobile("Toyota", "Yaris", 2019, "Rossa", 25000);
const auto4 = creaAutomobile("Renault", "Clio", 2021, "Blu", 12000);
const auto5 = creaAutomobile("Ford", "Fiesta", 2023, "Grigia", 3000);

console.log("=== ESERCIZIO JS_11 ===\n");

[auto1, auto2, auto3, auto4, auto5].forEach((auto, index) => {
    console.log(`\n--- Auto ${index + 1} ---`);
    auto.avviaMotore();
    auto.mostraInfo();
    auto.guida(100);
});