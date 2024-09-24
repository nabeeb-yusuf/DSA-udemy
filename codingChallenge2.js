function areThereDuplicatesPointer(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}
/**
 * USING FREQUENCY PATTERN
 * @param args
 */
function areThereDuplicates(...args) {
    if (args.length === 1) return false;
    // Define frequency object
    let freq = {}

    // Store the frequency for each element in array
    for (let arg of args) {
        freq[arg] = (freq[arg] || 0) + 1;
    }
    for (let key in freq) {
        if (freq[key] > 1) {
            return true;
        }
    }
    return false;
}