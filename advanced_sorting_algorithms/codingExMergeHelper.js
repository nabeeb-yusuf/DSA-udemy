function merge(arr1, arr2, comparator){
    // add whatever parameters you deem necessary - good luck!
    if (typeof comparator !== 'function') {
        // default
        comparator = (num1, num2) => {
            return num1 - num2;
        };
    }

    let res = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) < 0) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

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

export default merge;