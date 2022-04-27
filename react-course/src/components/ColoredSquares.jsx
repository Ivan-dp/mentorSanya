import { ArrOfObj } from "../functions/ArrOfObj";
import { copyArr1 } from "./Arr1";
import { arrayColor } from "../functions/ArrOfObj";

const ColoredSquaresArray = ArrOfObj(copyArr1, arrayColor);

export const ColoredSquares = ColoredSquaresArray.map((ColoredSquaresArray) => {
    return <li className="RedSquare">{ColoredSquaresArray}</li>;
});