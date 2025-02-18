/**
 * Helper function to extract a number from the ith digit
 * @param num
 * @param digit
 * @returns {number}
 */
function getDigit(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

/**
 * Helper function to count the number of digits of a given number
 * @param num
 * @returns {number}
 */
function digitCount(num) {
    if (num === 0) return 1;
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

/**
 * Alternate solution for digitCount using logarithmic function
 */
function digitCount2(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Returns the maximum number of digits present in an array of numbers
 */
function mostDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

function radixSort(arr) {

    let maxDigitCount = mostDigits(arr);

    for (let i = 0; i < maxDigitCount; i++) {

        let buckets = Array.from({length: 10}, () => []);

        for (let j = 0; j < arr.length; j++) {
            buckets[getDigit(arr[j], i)].push(arr[j]);
        }
        // SPREAD OPERATOR (...)
        arr = [].concat(...buckets); // reconstruct arr by concat empty array with every individual elements in buckets array of arrays
    }
    return arr;
}

console.log(radixSort([34,153,53,5313,7,863,75,7753,23]));