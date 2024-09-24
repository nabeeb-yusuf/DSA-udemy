function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < 2) {
        return false;
    }
    // define the two pointers
    let left = 0;
    let right = 1;

    // loop through the array and compare left to right
    while (left < arr.length-1) {
        // if left + right equal avg, return true
        if ( (arr[left] + arr[right]) / 2 === avg ) {
            return true;
        } else if ( (arr[left] + arr[right]) / 2 > avg ) {
            // if left+right avg greater than avg
            left++;
            right = left + 1;
        } else {
            // else increment right
            if (right === arr.length-1){
                left++;
                right = left + 1;
            } else {
                right++;
            }
        }
    }
    return false;
}

function averagePairSolution(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
}