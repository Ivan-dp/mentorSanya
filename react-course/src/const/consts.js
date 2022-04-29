import { mergeArrays } from "../functions/mergeArrays";
import { stringsDelete } from "../functions/stringsDelete";
import { sortAscend } from "../functions/sortAscend";

export const arrayValue = ['apple', 10, 'orange', 4, 'strawberry', 3.15, 5.16, -1, -9, 300];
export const arrayColor = ['red', 'orange', 'blue', 'yellow', 'green', 'black', 'grey', 'purple', 'coral', 'pink'];
export const copyArrayValue = [...arrayValue];
export const arrayColorValue = mergeArrays(copyArrayValue, arrayColor);
export const copyArrayColorValue = [...arrayColorValue];

export const arrayNum = stringsDelete(copyArrayColorValue).sort(sortAscend);

export const numArrayColors = {
    '<0': 'red',
    '0-5': 'yellow',
    '>5': 'green'
};