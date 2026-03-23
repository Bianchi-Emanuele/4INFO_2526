function calcolaMediaEta(studenti) {
    const somma = studenti.reduce((acc, studente) => acc + studente.eta, 0);
    return somma / studenti.length;
}