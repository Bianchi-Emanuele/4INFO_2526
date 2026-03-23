function spostaElemento(arr, N, M) {
    const risultato = [...arr];
    const elemento = risultato.splice(N, 1)[0];
    risultato.splice(M, 0, elemento);
    return risultato;
}
console.log((spostaElemento([10,20,30,40,50], 0, 2)));