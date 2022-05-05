import React from 'react';
import { copyArrayColorValue, numArrayColors } from '../const/consts';
import { stringsDelete } from '../functions/stringsDelete';
import { sortAscend } from '../functions/sortAscend';

export const arrayNum = stringsDelete(copyArrayColorValue).sort(sortAscend);

export const NumArray = arrayNum.map((item) => {
  if (item >= 0 && item <= 5) {
    return (
      <li key={item} className="square" style={{ backgroundColor: numArrayColors['0-5'] }}>
        {item}
      </li>
    );
  } else if (item > 5) {
    return (
      <li key={item} className="square" style={{ backgroundColor: numArrayColors['>5'] }}>
        {item}
      </li>
    );
  }
  return (
    <li key={item} className="square" style={{ backgroundColor: numArrayColors['<0'] }}>
      {item}
    </li>
  );
});
