import React from 'react';
import {arrayColor, ArrOfObj} from "../functions/ArrOfObj";

export const array1 = ['apple', 10, 'orange', 4, 'strawberry', 3.15, 5.16, -1, -9, 300];
export const copyArr1 = [...array1];

const Arr1 = array1.map((array1) => {
    return <li className="RedSquare square">{array1}</li>;
})

export default Arr1;