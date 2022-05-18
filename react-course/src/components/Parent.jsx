import { React, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Baby } from './Baby';

export const Parent = () => {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState('black');
  return (
    <div className="Parent">
      {/* <Baby /> */}
      <Baby parentColor={color} babyColor={setColor('yellow')} />
      {/* <Baby parentColor={color} babyColor={setColor('red')} />
      <Baby parentColor={color} babyColor={setColor('green')} /> */}
    </div>
  );
};
