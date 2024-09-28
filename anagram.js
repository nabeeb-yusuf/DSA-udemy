// function validAnagram(str1, str2) {
//     // create two objects to store the frequency of each char in both strings
//     let freq1 = {};
//     let freq2 = {};
//     for (let char of str1) {
//         freq1[char] = (freq1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         freq2[char] = (freq2[char] || 0) + 1;
//     }
//     // loop through first frequency object and check that the keys and values match in second object
//     for (let key in freq1) {
//         // return false if key doesn't exist in second obj
//         if (!(key in freq2)){
//             return false;
//         }
//         // return false if value of key doesn't match
//         if (freq2[key] !== freq1[key]) {
//             return false;
//         }
//     }
//     // return true
//     return true;
// }

function validAnagram(str1, str2) {
    // if len doesn't match, obv frequency won't match
    if (str1.length !== str2.length) return false;
    if (str1.length !== str2.length) {
        return false;
    }
    let freq1 = {};
    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!freq1[char]) {
            return false;
        }else{
            freq1[char] -= 1;
        }
    }
    return true;
}

console.log(validAnagram("anagram","nagaram"));
console.log(validAnagram("zza","zaz"));
console.log(validAnagram("zza","zaa"));
console.log(validAnagram("","aa"));