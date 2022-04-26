import React from 'react';

export const array1 = ['apple', 10, 'orange', 4, 'strawberry', 3.15, 5.16, -1, -9, 300];
export const copyArr1 = array1.slice(0);

const Arr1 = array1.map((array1) => 
    <li className="RedSquare">{array1}</li>
)
console.log(Arr1);
console.log(array1);
console.log(copyArr1);

export default Arr1;