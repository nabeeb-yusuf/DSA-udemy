function minSubArrayLen(arr, sum) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        // increase window if total less than sum
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        }
        // if total greater than equals to sum, shrink window
        else if (total >= sum) {
            total -= arr[start];
            minLen = Math.min(minLen, end-start);
            start++;
        }
        // else exit loop if array reaches the end
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}