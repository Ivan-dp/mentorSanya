import { React, useEffect, useState } from 'react';

export const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (count > 0) {
      arr.push(count + ' обезъянка');
      //TODO што-то тут не так
    }
  }, [count]);

  useEffect(() => {
      console.log('Я родился ' + count + ' раз!');
      console.log(arr);
      //TODO почему при изменении arr, не срабатывает этот хук?
  }, [arr]);

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
