const flatten = require("../recursion_challenging/flatten");

test('flatttens an array of arrays to a single array', () => {
    const input = [1, [2, [3, 4], [[5]]]];
    const expected = [1, 2, 3, 4, 5];
    expect(flatten(input)).toEqual(expected);
})

test('handles empty arrays', () => {
    const input = [];
    const expected = [];
    expect(flatten(input)).toEqual(expected);
})