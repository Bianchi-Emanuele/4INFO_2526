function max3(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

// Main
console.log("=== ESERCIZIO JS_18 ===\n");
console.log("max3(5, 8, 3):", max3(5, 8, 3));
console.log("max3(12, 15, 7):", max3(12, 15, 7));
console.log("max3(10, 10, 10):", max3(10, 10, 10));
