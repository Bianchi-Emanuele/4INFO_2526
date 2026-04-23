/* OOP
    scrivere un programma in JS che:
        1. implementi una classe Calcolatrice che fornisce le 4 operazioni aritmetiche base
        2. in aggiunta questa classe permette l'esecuzione di espressioni del tipo:
        5+3-2+4*5-2/2 (non ci sono precedenze)
        3. scrivere il main che utilizzando la classe Calcolatrice, stampi sulla console le seguenti espressioni ed il
            risultato di ciascuna:
                6-2^ * 5 + 8/4 =
                11^ * 3 + 5 - 5/11 =
                29 + 2 + (- 7/3) / 2 +1^ * 2=?
        4. Consegnare su github il file con nome /cognome|_esercizio_js_70.js*/

// cognome_esercizio_js_70.js

class Calcolatrice {
    somma(a, b) {
        return a + b;
    }

    sottrai(a, b) {
        return a - b;
    }

    moltiplica(a, b) {
        return a * b;
    }

    dividi(a, b) {
        return a / b;
    }

    // calcolo SENZA precedenze (da sinistra a destra)
    calcola(expr) {
        // tolgo spazi
        expr = expr.replaceAll(" ", "");
        let risultato = "";
        let numero = "";
        let operatore = "+";
        for (let i = 0; i < expr.length; i++) {
            let char = expr[i];
            // se è numero lo aggiungo
            if (!isNaN(char)) {
                numero += char;
            } else {
                // faccio il calcolo
                risultato = this.esegui(risultato, numero, operatore);
                operatore = char;
                numero = "";
            }
        }
        // ultimo numero
        risultato = this.esegui(risultato, numero, operatore);
        return risultato;
    }

    esegui(a, b, op) {
        a = Number(a);
        b = Number(b);
        if (op === "+") return this.somma(a, b);
        if (op === "-") return this.sottrai(a, b);
        if (op === "*") return this.moltiplica(a, b);
        if (op === "/") return this.dividi(a, b);
    }
}


let calc = new Calcolatrice();

console.log("6-2*5+8/4 =", calc.calcola("6-2*5+8/4"));
console.log("11*3+5-5/11 =", calc.calcola("11*3+5-5/11"));
console.log("29+2-7/3/2+1*2 =", calc.calcola("29+2-7/3/2+1*2"));