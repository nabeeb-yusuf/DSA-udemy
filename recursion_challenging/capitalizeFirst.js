function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = [];
    if (arr.length <= 1) return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return newArr.concat(capitalizeFirst(arr.slice(1)));
}


/**
 * CAPS entire word
 */
function capitalizeWords (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
