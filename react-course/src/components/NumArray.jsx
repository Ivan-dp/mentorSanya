import React from "react";
import { copyArrayColorValue } from "../const/consts";
import {stringsDelete} from "../functions/stringsDelete";
import { numArrayColors } from "../const/consts";

export const arrayNum = stringsDelete(copyArrayColorValue);

export const NumArray = arrayNum.map(item => {
    if ((item >= 0) && (item <= 5)) {
        return <li key={item} className="square" style={{backgroundColor: numArrayColors["0-5"]}}>
            {item}
        </li>;
    } else if (item > 5) {
        return <li key={item} className="square" style={{backgroundColor: numArrayColors[">5"]}}>
            {item}
        </li>;
    }
    return (
        <li key={item} className="square" style={{backgroundColor: numArrayColors["<0"]}}>
            {item}
        </li>
    );
});