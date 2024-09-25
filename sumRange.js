/**
 * Intro to Recursion
 * Use Call Stack to better understand what's happening
 * @param num
 * @returns {*|number}
 */
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(4));