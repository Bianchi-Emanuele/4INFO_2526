function azzeraMultipli(array, n) {
    return array.map(num => num % n === 0 ? 0 : num);
}