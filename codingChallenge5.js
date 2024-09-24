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