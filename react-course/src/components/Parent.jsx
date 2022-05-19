import { React, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Baby } from './Baby';

export const Parent = () => {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState('black');
  return (
    <div className="Parent">
      {/* <Baby /> */}
      <Baby key="1" className={'baby1'} parentColor={color} babyColor={'yellow'} func={setColor} />
      <Baby key="2" className={'baby2'} parentColor={color} babyColor={'red'} func={setColor} />
      <Baby key="3" className={'baby3'} parentColor={color} babyColor={'green'} func={setColor} />
    </div>
  );
};
