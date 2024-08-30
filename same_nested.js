function same(arr1, arr2) {
    // return false if length of array don't match
    if (arr1.length !== arr2.length) {
        return false;
    }
    // loop through each item in arr1
    for (let i = 0; i < arr1.length; i++) {
        // find index of item squared in arr2, if not found return false
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        // remove item in previously found index in arr2
        arr2.splice(correctIndex, 1);
    }
    // return true if loop finishes
    return true;
}

console.log(same([1,2,3,4],[1,4,9,16]));