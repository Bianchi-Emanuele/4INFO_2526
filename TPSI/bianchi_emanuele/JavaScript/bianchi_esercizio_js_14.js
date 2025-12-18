function differenzaOrari(ora1, ora2) {
    const tempo1 = (ora1.h || 0) * 3600000 + (ora1.m || 0) * 60000 + (ora1.s || 0) * 1000;
    const tempo2 = (ora2.h || 0) * 3600000 + (ora2.m || 0) * 60000 + (ora2.s || 0) * 1000;
    
    const diffMs = Math.abs(tempo2 - tempo1);
    
    return {
        ms: diffMs,
        secondi: Math.floor(diffMs / 1000),
        minuti: Math.floor(diffMs / 60000),
        ore: Math.floor(diffMs / 3600000)
    };
}

// Main
console.log("=== ESERCIZIO JS_14 ===\n");

const orario1 = { h: 10, m: 30, s: 45 };
const orario2 = { h: 12, m: 15, s: 20 };
console.log("Differenza 10:30:45 - 12:15:20:", differenzaOrari(orario1, orario2));

const orario3 = { h: 8, m: 0, s: 0 };
const orario4 = { h: 9, m: 30, s: 0 };
console.log("Differenza 08:00:00 - 09:30:00:", differenzaOrari(orario3, orario4));
