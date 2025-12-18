function opera(a, b, callback) {
    return callback(a, b);
}

// Callback
const somma = (a, b) => a + b;
const prodotto = (a, b) => a * b;
const potenza = (a, b) => a ** b;

// Main
console.log("=== ESERCIZIO JS_21 ===\n");
console.log("Somma 5+3:", opera(5, 3, somma));
console.log("Prodotto 4*6:", opera(4, 6, prodotto));
console.log("Potenza 2^4:", opera(2, 4, potenza));
