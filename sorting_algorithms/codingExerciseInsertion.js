function insertionSort(arr, comparator) {
    // add whatever parameters you deem necessary - good luck!
    if (typeof comparator !== 'function') {
        comparator = (num1, num2) => {
            return num1 - num2;
        }
    }

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentVal;
    }

    return arr;
}