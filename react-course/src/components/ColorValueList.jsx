import React from 'react';
import { mergeArrays } from "../functions/mergeArrays";
import { copyArrayValue } from "./Arr1";
import { arrayColor } from "../functions/mergeArrays";

export const arrayColorValue = mergeArrays(copyArrayValue, arrayColor);

export const ColorValueList = arrayColorValue.map((colorValue) => {
    return <li key={colorValue.index} className="square" style={{backgroundColor: colorValue.background}}>
        {colorValue.value}
    </li>;
});