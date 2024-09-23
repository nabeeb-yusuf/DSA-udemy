/**
 * Naive version ( self attempt, not optimal )
 */
// function maxSubarraySum(arr,n) {
//     // set max as negative inf
//     let max = -Infinity;
//     // create sliding window of size n from index 0
//     let left = 0;
//     let right = n;
//
//     while (right < arr.length) {
//         let sum = 0;
//         for (let i = left; i < right; i++){
//             sum += arr[i];
//         }
//         if (sum > max) {
//             max = sum;
//         }
//         left++;
//         right++;
//     }
//     return max;
// }

/**
 * Refactored version
 */
function maxSubarraySum(arr, num) {
    // Define maximum and current iter sum
    let maxSum = 0;
    let tempSum = 0;
    // Return null if array less than subarray length
    if (arr.length < num) return null;
    // calculate subarray sum for index 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // Continue to move up the array
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // SLIDING WINDOW: for each loop, subtract start-1 and add end+1 to move the window up
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1,3,5,7,2,4,7,8,4,1,4,6],2));