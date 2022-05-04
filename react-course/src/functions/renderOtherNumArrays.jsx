import { numArrayColors } from "../const/consts";

export const renderOtherNumArrays = function(arr) {
    return arr.map(item => {
        if ((item >= 0) && (item <= 5)) {
            return <li key={item} className="square" style={{backgroundColor: numArrayColors["0-5"]}}>
                {item}
            </li>;
        } if (item > 5) {
            return <li key={item} className="square" style={{backgroundColor: numArrayColors[">5"]}}>
                {item}
            </li>;
        }
        return (
            <li key={item} className="square" style={{backgroundColor: numArrayColors["<0"]}}>
                {item}
            </li>
        );
    })        
};  