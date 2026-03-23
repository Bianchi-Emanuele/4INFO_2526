function sommaInversa(arr) {
    const somma = arr.reduce((sum, n) => sum + n, 0);
    const inverso = arr.slice().sort((a,b) => b - a);
    return [somma, ...inverso];
}
console.log((sommaInversa([1,2,3])));