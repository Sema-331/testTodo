import React from 'react';
import { IntArr } from '../Interfaces/Interface';

// interface PropInt

const Item = ({ item }: { item: IntArr }) => {
  return (
    <div>
      <h1>{item.id}</h1>
      <p>{item.name}</p>
      <p>{item.lastName}</p>
    </div>
  );
};

export default Item;
