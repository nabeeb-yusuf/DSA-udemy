function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str1 === str2) return true;
    if (!str1) return true;
    // define the pointers
    let i = 0;
    let j = 0;
    // iterate through second string and check if the character from first str exist
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}