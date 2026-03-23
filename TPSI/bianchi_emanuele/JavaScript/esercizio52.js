function generaCasuale() {
    const caratteri = "abcdefghijklmnopqrstuvwxyz0123456789";
    let risultato = [];
    for (let i = 0; i < 7; i++) {
        const indice = Math.floor(Math.random() * caratteri.length);
        risultato.push(caratteri[indice]);
    }
    return risultato;
}