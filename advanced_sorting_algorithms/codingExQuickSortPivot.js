function pivot(arr, comparator, start=0, end=arr.length - 1){
    // good luck!
    if (typeof comparator !== 'function') {
        comparator = (num1, num2) => {
            return num1 - num2;
        }
    }

    let pivot = arr[start];
    let swapIdx = start;

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = start + 1; i <= end; i++) {
        if (comparator(pivot, arr[i]) > 0) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, start, swapIdx);

    return swapIdx;
}

export default pivot;