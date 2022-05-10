import { React, useEffect, useState } from 'react';

export const TestUseEffect = () => {
  const [count, setCount] = useState(0);

  const myArr = [];

  useEffect(() => {
    console.log('Я родился ' + count + ' раз!');
    for (var i = 0; i <= count; i += 1) {
      myArr.push(count + ' обезьянка');
    }
    console.log(myArr);
  });
  return (
    <div>
      <button className="square green" onClick={() => setCount(count + 1)}>
        Fuck Yeah!
      </button>
    </div>
  );
};
