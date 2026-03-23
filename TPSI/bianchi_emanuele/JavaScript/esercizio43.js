function rimuoviNumero(arr, N) {
    return arr.filter(x => x !== N);
}
console.log((rimuoviNumero([1,2,3,4], 3)));