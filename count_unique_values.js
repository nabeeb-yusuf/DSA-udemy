function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    // start from left, use 2nd pointer to compare and move right
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
            right++;
        } else {
            right++;
        }
    }
    // if left != right then increment left, and change value of arr[left] = arr[right]
    // number of unique values will be index of left + 1
    console.log(arr.slice(0,left+1));
    return left+1;
}

console.log(countUniqueValues([-4,-4,-4,-2,-2,-2,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]));