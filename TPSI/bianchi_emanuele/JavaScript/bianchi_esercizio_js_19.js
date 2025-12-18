function analizzaOggetto(obj) {
    console.log("=== ANALISI OGGETTO ===\n");
    for (let [nome, valore] of Object.entries(obj)) {
        const tipo = typeof valore;
        const valoreVisualizzato = tipo === 'string' ? valore.toLowerCase() : valore;
        console.log(`Nome: ${nome}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Valore: ${valoreVisualizzato}\n`);
    }
}

// Main
console.log("=== ESERCIZIO JS_19 ===\n");

const persona1 = {
    nome: "Mario ROSSI",
    eta: 30,
    citta: "ROMA",
    lavora: true,
    hobby: ["calcio", "tennis"],
    salario: 2500.50
};

const auto1 = {
    marca: "FIAT",
    modello: "PANDA",
    anno: 2020,
    colore: "NERO",
    km: 15000,
    nuovo: false
};

analizzaOggetto(persona1);
console.log("\n--- Secondo oggetto ---\n");
analizzaOggetto(auto1);
