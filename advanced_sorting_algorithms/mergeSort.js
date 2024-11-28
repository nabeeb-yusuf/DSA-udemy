const merge = (arr1, arr2) => {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    // if (i === arr1.length) {
    //     res.concat(arr2.slice(j));
    // } else {
    //     res.concat(arr1.slice(i));
    // }
    /**
     * Alternate solution for adding remaining array elements
     */
    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

//console.log(merge([2,4,6,8], [1,3,5,7]));
console.log(mergeSort([22,57,45,66,84,52]));