function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let maxLen = 0;
    let start = 0;
    let seen = {};

    for (let end = 0; end < str.length; end++) {
        let char = str[end];
        if (seen[char] !== undefined) {
            start = Math.max(start, seen[char] + 1);
        }
        seen[char] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}