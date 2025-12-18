function orarioMinore(ora1, ora2, ora3) {
    const tempo1 = (ora1.h || 0) * 3600 + (ora1.m || 0) * 60 + (ora1.s || 0);
    const tempo2 = (ora2.h || 0) * 3600 + (ora2.m || 0) * 60 + (ora2.s || 0);
    const tempo3 = (ora3.h || 0) * 3600 + (ora3.m || 0) * 60 + (ora3.s || 0);
    
    const tempi = [tempo1, tempo2, tempo3];
    const minTempo = Math.min(...tempi);
    
    if (tempo1 === minTempo) return ora1;
    if (tempo2 === minTempo) return ora2;
    return ora3;
}

// Main
console.log("=== ESERCIZIO JS_16 ===\n");

console.log("Minore di 10:30, 09:15, 11:00:", orarioMinore(
    {h:10,m:30}, {h:9,m:15}, {h:11,m:0}
));

console.log("Minore di 14:20:30, 14:10:45, 14:25:10:", orarioMinore(
    {h:14,m:20,s:30}, {h:14,m:10,s:45}, {h:14,m:25,s:10}
));
