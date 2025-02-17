import merge from "./codingExMergeHelper";

function mergeSort(arr, comparator){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);

    return merge(left, right, comparator);
}