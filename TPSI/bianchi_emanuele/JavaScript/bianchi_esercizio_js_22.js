const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => b !== 0 ? a / b : "Errore: divisione per 0";

// Main
console.log("=== ESERCIZIO JS_22 ===\n");

console.log("SOMMA:", somma(5, 3), somma(10, 2));
console.log("SOTTRAZIONE:", sottrazione(10, 4), sottrazione(7, 2));
console.log("MOLTIPLICAZIONE:", moltiplicazione(6, 4), moltiplicazione(3, 7));
console.log("DIVISIONE:", divisione(20, 5), divisione(10, 2));
