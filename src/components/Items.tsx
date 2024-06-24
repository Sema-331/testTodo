import React from 'react';
import { useAppSelector } from '../helperRedux/helperRedux';
import Item from './Item';

const Items = () => {
  const selector = useAppSelector(item => item.storeSlice.todoArr);

  console.log('items');
  return (
    <div>
      <p>Items</p>
      {selector.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
