function bubbleSort(arr, comparator) {
    // add whatever parameters you deem necessary - good luck!
    if (typeof comparator !== 'function') {
        // default
        comparator = (num1, num2) => {
            return num1 - num2;
        }
    }

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let noSwaps = true;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}