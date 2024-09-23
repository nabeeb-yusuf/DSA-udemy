function search(arr, num) {
    /**
     * USING BINARY SEARCH
     */

    // define min and max
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        // If middle index element is less than num, move min up
        if (arr[middle] < num) {
            min = middle + 1;
        }
        // if middle index element is more than num, move max down
        else if (arr[middle] > num) {
            max = middle - 1;
        }
        // Else arr[middle] == num, so return num
        else {
            return middle;
        }
    }
    // return -1 if num not found
    return -1;
}

console.log(search([1,2,3,4,5,6], 4));
console.log(search([-1,0,2,4,5,6], 4));