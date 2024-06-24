import React, { memo } from 'react';

const ItemTodo = memo(function ItemTodo({ item }: any) {
  console.log('itemtodo');
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.lastName}</p>
    </div>
  );
});

export default ItemTodo;
