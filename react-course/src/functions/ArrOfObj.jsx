import array1 from '../components/Arr1';
import Arr1 from '../components/Arr1';
import copyArr1 from '../components/Arr1';

const array2 = ['red', 'orange', 'blue', 'yellow', 'green', 'black', 'grey', 'purple', 'coral', 'pink'];

function ArrOfObj(arr1, arr2) {
    const arr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr[i] = {value: arr1[i], color: arr2[i]};
    }
    return arr;
}

const newArr = ArrOfObj(copyArr1, array2);
console.log(newArr);
console.log(Arr1);
console.log(array1);
console.log(copyArr1);

export default ArrOfObj;