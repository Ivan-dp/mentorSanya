export const mergeArrays = function(arr1, arr2) {
    const arr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr[i] = {value: arr1[i], background: arr2[i]};
    }
    return arr;
}
