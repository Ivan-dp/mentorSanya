import { React, useEffect, useState } from 'react';

export const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (count > 0) {
      arr.push(count + ' обезъянка');
      console.log('Я родился ' + count + ' раз!');
      console.log(arr);
    }
  }, [count, arr, setArr]);

  return (
    <div>
      <button
        className="square green"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Fuck Yeah!
      </button>
    </div>
  );
};
