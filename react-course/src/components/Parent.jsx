import { React, useState } from 'react';

export const Parent = () => {
  const [color, setColor] = useState('black');
//   const Children1 = (props) => {
//         setColor('yellow')
//     };
//     const Children2 = (props) => {
//         setColor('red')
//     };
//     const Children3 = (props) => {
//         setColor('green')
//     };
  render() {
      return (
          <div className="square"></div>
      )
  };
};
