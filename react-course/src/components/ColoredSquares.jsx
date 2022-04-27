import React from 'react';
import { ArrOfObj } from "../functions/ArrOfObj";
import { copyArr1 } from "./Arr1";
import { arrayColor } from "../functions/ArrOfObj";

export const ColoredSquaresArray = ArrOfObj(copyArr1, arrayColor);

export const ColoredSquares = ColoredSquaresArray.map((color) => {
    return <li key={color.index} className="square" style={{backgroundColor: color.background}}>
        {color.value}
    </li>;
});