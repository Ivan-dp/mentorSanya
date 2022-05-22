import { React, useEffect, useState } from 'react';
import { Par, Toggle } from '../components';

const ToggleSquare = () => {
  const [tog, setTog] = useState(false);
  const [color, setColor] = useState('grey');

  useEffect(() => {
    setColor(tog ? 'red' : 'grey');
  }, [tog]);

  console.log(tog);
  console.log(color);

  return (
    <div>
      <Par>
        <div className="square" style={{ backgroundColor: 'pink' }}></div>
      </Par>
      <Par>
        <div className="square" style={{ backgroundColor: color }}>
          <Toggle>
            <button onClick={() => setTog(!tog)}>Push ME!</button>
          </Toggle>
        </div>
      </Par>
    </div>
  );
};

export { ToggleSquare };
