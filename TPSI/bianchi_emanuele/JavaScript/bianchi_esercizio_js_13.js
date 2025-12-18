function sommaFinoN(n) {
    n = Number(n);
    if (!Number.isInteger(n) || n < 0) return 0;
    
    let somma = 0;
    for (let i = 0; i <= n; i++) {
        somma += i;
    }
    return somma;
}

// Main
console.log("=== ESERCIZIO JS_13 ===\n");
console.log("sommaFinoN(5):", sommaFinoN(5));   // 15
console.log("sommaFinoN('10'):", sommaFinoN("10")); // 55
console.log("sommaFinoN(8):", sommaFinoN(8));   // 36