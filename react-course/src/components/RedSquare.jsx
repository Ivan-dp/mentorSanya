import React, {useState} from 'react';

const RedSquare = function () {

    const [count, setCount] = useState(0)

    function increment () {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div className="RedSquare">
            <button onClick={increment}className="RedSquare__button-increment">+</button>
            <h1>{count}</h1>
        </div>
    )
}

export default RedSquare;