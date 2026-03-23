function invertiSottoArray(array, m) {
    const parte1 = array.slice(0, m);
    const parte2 = array.slice(m + 1);
    return [...parte2, ...parte1];
}

// Test slide: [1,2,3,4,5,6,7], M=3 -> [5,6,7, 1,2,3,4]