import array1 from '../components/Arr1';

const array2 = ['red', 'orange', 'blue', 'yellow', 'green', 'black', 'grey', 'purple', 'coral', 'pink'];

function ArrOfObj(arr1, arr2) {
    const arr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr[i] = {value: arr1[i], color: arr2[i]};
    }
    // console.log(arr);
    return arr;
}
// console.log(ArrOfObj);

const newArr = ArrOfObj(array1, array2);
console.log(newArr);

export default ArrOfObj;