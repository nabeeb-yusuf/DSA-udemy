function selectionSort(arr, comparator) {

    if (typeof comparator !== 'function') {
        // default
        comparator = (num1, num2) => {
            return num1 - num2;
        };
    }

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[lowest]) < 0) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            swap(arr, i, lowest);
        }
    }
    return arr;
}