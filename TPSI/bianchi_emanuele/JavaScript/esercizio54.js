function arrayCasualeInvertito(n) {
    let array = Array.from({ length: n }, () => Math.floor(Math.random() * 20));
    console.log("Originale:", array);
    console.log("Invertito:", [...array].reverse());
}