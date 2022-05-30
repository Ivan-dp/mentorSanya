import { React, useEffect, useState } from 'react';
import { Par, Toggle } from '../components';
import { Button } from '@mantine/core';

const ToggleSquare = () => {
  const [tog, setTog] = useState(false);
  const [color, setColor] = useState('grey');

  useEffect(() => {
    setColor(tog ? 'red' : 'grey');
  }, [tog]);

  console.log(tog);
  console.log(color);

  return (
    <div className="toggle-square">
      <h1>Issue 25</h1>
      <Par>
        <div className="square" style={{ backgroundColor: 'pink' }}></div>
      </Par>
      <Par>
        <div className="square" style={{ backgroundColor: color }}>
          <Toggle>
            <Button size="xs" onClick={() => setTog(!tog)}>
              Push ME!
            </Button>
          </Toggle>
        </div>
      </Par>
    </div>
  );
};

export { ToggleSquare };
