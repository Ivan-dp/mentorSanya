import React from 'react';

export const array1 = ['apple', 10, 'orange', 4, 'strawberry', 3.15, 5.16, -1, -9, 300];
const Arr1 = array1.map((array1) => 
    <li className="RedSquare">{array1}</li>
)
 
export default Arr1;