function same(arr1, arr2) {
    // create two objects to store frequency of numbers
    let freq1 = {};
    let freq2 = {};
    // loop through each array to store frequency
    for (let num of arr1) {
        freq1[num] = (freq1[num] || 0) + 1;
    }
    for (let num of arr2) {
        freq2[num] = (freq2[num] || 0) + 1;
    }
    // for each key in object for arr1, check its squared key exists in arr2
    for (let key in freq1) {
        if (!(key ** 2 in freq2)) {
            // return false if not exist
            return false;
        }
        // check that the value of both objects match (key1.value == key2.value)
        if (freq2[key ** 2] !== freq1[key]) {
            // return false if not match
            return false;
        }
    }
    console.log(freq1, freq2);
    // return true
    return true;
}

console.log(same([1,2,3,2],[4,4,9,1]));