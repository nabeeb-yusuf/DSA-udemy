import pivot from "./codingExQuickSortPivot";

function quickSort(arr, comparator, left=0, right=arr.length-1) {
    // good luck!
    if (left < right) {
        let pivotIdx = pivot(arr, comparator, left, right);
        // left
        quickSort(arr, comparator, left, pivotIdx-1);
        // right
        quickSort(arr, comparator,pivotIdx+1, right);
    }
    return arr;
}