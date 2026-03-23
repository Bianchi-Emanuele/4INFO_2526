function arrayUguali(arr1, arr2) {
    return arr1.length === arr2.length && 
           (arr1) === (arr2);
}
console.log(arrayUguali([1,2,3], [1,2,3]));
console.log(arrayUguali([1,2,3], [1,3,3]));