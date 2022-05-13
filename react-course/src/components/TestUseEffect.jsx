import { React, useEffect, useState } from 'react';

export const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (count > 0) {
      setArr([...arr, count + ' обезъянка']);
      //TODO што-то тут не так
    }
  }, [count]);

  useEffect(() => {
    if (count > 0) {
      console.log('Я родился ' + count + ' раз!');
      console.log(arr);
    }
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
