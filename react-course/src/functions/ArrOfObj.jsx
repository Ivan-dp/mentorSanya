export const arrayColor = ['red', 'orange', 'blue', 'yellow', 'green', 'black', 'grey', 'purple', 'coral', 'pink'];

export function ArrOfObj(arr1, arr2) {
    const arr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr[i] = {value: arr1[i], color: arr2[i]};
    }
    return arr;
}