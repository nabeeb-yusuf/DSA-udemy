function insertionSort(arr) {
    for (let i = 1; i <arr.length; i++) {
        let currentVal = arr[i];
        let j; // Declare j here so it is usable outside the loop
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal; // accessing j outside the loop
    }
    return arr;
}

console.log(insertionSort([57,22,45,66,84,52]));