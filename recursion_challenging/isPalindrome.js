// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(str){
//     // add whatever parameters you deem necessary - good luck!
//     function helper(helperInput) {
//         if (helperInput.length === 1) return str[0];
//         return helperInput.charAt(helperInput.length - 1) + helper(helperInput.substring(0, helperInput.length - 1));
//     }
//
//     let reverse = helper(str);
//
//     return str === reverse;
//
// }

/**
 * REFACTORED
 */
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

console.log(isPalindrome('a man, a plan, a canal, panama'));