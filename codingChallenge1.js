function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let freq1 = {};
    let freq2 = {};

    // convert the integers to String
    let n1 = num1.toString();
    let n2 = num2.toString();

    // if length doesn't match, frequency will obv not match
    if (n1.length !== n2.length) return false;

    // loop through the first integer and count frequency of each digit
    for (let digit of n1) {
        freq1[digit] = (freq1[digit] || 0) + 1;
    }
    for (let digit of n2) {
        freq2[digit] = (freq2[digit] || 0) + 1;
    }

    for (let key in freq1) {
        // return false if digit does not exist in second int
        if (!(key in freq2)) {
            return false;
        }
        // check that the frequency of digit in first int matches second int
        if (freq2[key] !== freq1[key]) {
            return false;
        }
    }

    return true;
}
