//Realizzare il ciclo for...in su un oggetto utente NON utilizzando il for...in ma un ciclo for normale
let utente = {
    nome: "Mario",
    cognome: "Rossi",
    età: 30
}

for (let i = 0; i < Object.keys(utente).length; i++)
{
    console.log(`la chiave ${i} ha valore ${utente[i]}`);
}