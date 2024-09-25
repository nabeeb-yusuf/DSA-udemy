function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = [];
    if (arr.length <= 1) return arr[0].toUpperCase();
    newArr.push(arr[0].toUpperCase());
    return newArr.concat(capitalizeWords(arr.slice(1)));
}
