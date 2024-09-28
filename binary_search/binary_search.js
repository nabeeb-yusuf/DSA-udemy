function binarySearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < num) {
            start = middle + 1;
        }
        else if (arr[middle] > num) {
            end = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;

}