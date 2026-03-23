function reverseArray(array) {
    return array.slice().sort((a,b) => b - a);
}
console.log((reverseArray([10, 50, 5])));