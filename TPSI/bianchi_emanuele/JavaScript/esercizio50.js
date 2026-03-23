function isPrimo(num) {
    if (num <= 1) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function ordinaPrimi(array) {
    const primi = array.filter(n => isPrimo(n));
    const altri = array.filter(n => !isPrimo(n));
    return [...primi, ...altri];
}