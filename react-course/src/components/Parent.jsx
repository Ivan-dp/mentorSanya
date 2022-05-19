import { React, useState } from 'react';
import { Baby } from './Baby.jsx';

export const Parent = () => {
  const [color, setColor] = useState('black');
  return (
    <div className="Parent">
      <Baby parentColor={color} babyColor={'yellow'} func={setColor} />
      <Baby parentColor={color} babyColor={'red'} func={setColor} />
      <Baby parentColor={color} babyColor={'green'} func={setColor} />
    </div>
  );
};
