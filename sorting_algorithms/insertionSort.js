function insertionSort(arr) {
    for (let i = 1; i <arr.length; i++) {
        let currentVal = arr[i];
        /**
         * I have to use var j instead of let j so that j is still usable outside of the loop
         */
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal; // var j makes it possible to use j outside of the loop
    }
    return arr;
}

console.log(insertionSort([57,22,45,66,84,52]));