function fibonacci(n) {
    n = Number(n);
    if (!Number.isInteger(n) || n < 0) return 0;
    
    if (n === 0 || n === 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Main
console.log("=== ESERCIZIO JS_15 ===\n");
console.log("fibonacci(0):", fibonacci(0));  // 0
console.log("fibonacci(5):", fibonacci(5));  // 5
console.log("fibonacci(8):", fibonacci(8));  // 21
console.log("fibonacci(10):", fibonacci(10)); // 55
console.log("fibonacci(12):", fibonacci(12)); // 144
