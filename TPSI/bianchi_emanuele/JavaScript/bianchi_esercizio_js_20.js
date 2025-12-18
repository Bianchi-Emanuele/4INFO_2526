function Automobile(persone = 0, velocita = 0, rapporto = 1, accesa = false) {
    return {
        persone,
        velocita,
        rapporto,
        accesa,
        
        setPersone: function(nuovePersone) {
            if (this.velocita > 0) {
                console.log("Impossibile: auto in movimento");
                return false;
            }
            if (nuovePersone >= 0 && nuovePersone <= 5) {
                this.persone = nuovePersone;
                this.mostraStato();
                return true;
            }
            return false;
        },
        
        setVelocita: function(nuovaVelocita) {
            if (!this.accesa) {
                console.log("Auto spenta");
                return false;
            }
            if (nuovaVelocita < 0 || nuovaVelocita > 180) return false;
            if (Math.abs(nuovaVelocita - this.velocita) > 30) {
                console.log("Variazione troppo rapida (±30km/h max)");
                return false;
            }
            this.velocita = nuovaVelocita;
            this.mostraStato();
            return true;
        },
        
        aumentaRapporto: function() {
            if (!this.accesa) {
                console.log("Auto spenta");
                return false;
            }
            if (this.rapporto < 6) {
                this.rapporto++;
                this.mostraStato();
                return true;
            }
            console.log("Rapporto massimo raggiunto");
            return false;
        },
        
        diminuisciRapporto: function() {
            if (!this.accesa) {
                console.log("Auto spenta");
                return false;
            }
            if (this.rapporto > 1) {
                this.rapporto--;
                this.mostraStato();
                return true;
            }
            console.log("Rapporto minimo raggiunto");
            return false;
        },
        
        toggleAccensione: function() {
            this.accesa = !this.accesa;
            console.log(this.accesa ? "Auto ACCESA" : "Auto SPENTA");
            this.mostraStato();
            return this.accesa;
        },
        
        mostraStato: function() {
            console.log(`👥 ${this.persone} | ⚡ ${this.velocita}km/h | ⚙️ R${this.rapporto} | ${this.accesa}`);
        }
    };
}

// Main - Test completo
console.log("=== ESERCIZIO JS_20 ===\n");

const auto = new Automobile();

console.log("1. Accendo auto:");
auto.toggleAccensione();

console.log("\n2. Imposto persone (auto accesa):");
auto.setPersone(2);

console.log("\n3. Spengo auto e cambio persone:");
auto.toggleAccensione();
auto.setPersone(4);
auto.toggleAccensione();

console.log("\n4. Test velocità (variazioni ±30):");
auto.setVelocita(30);
auto.setVelocita(50);
auto.setVelocita(25); // OK
// auto.setVelocita(80); // Fallisce

console.log("\n5. Test rapporti:");
auto.aumentaRapporto();
auto.aumentaRapporto();
auto.diminuisciRapporto();
auto.aumentaRapporto();
auto.aumentaRapporto(); // Fallisce

console.log("\n6. Cambio persone con velocità > 0:");
auto.setPersone(1); // Fallisce

console.log("\n7. Spengo tutto:");
auto.toggleAccensione();
auto.mostraStato();
