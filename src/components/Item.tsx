import React, { useState } from 'react';
import { IntArr } from '../Interfaces/Interface';
import { useAppDispatch } from '../helperRedux/helperRedux';
import { handleDeleteItem } from '../redux/slices/slice';
import Modal from './Modal';

// interface PropInt

const Item = ({ item }: { item: IntArr }) => {
  const dispatch = useAppDispatch();
  const [stateModal, setStateModal] = useState<boolean>(false);
  console.log('item');

  const updateItem = () => {};

  return (
    <div>
      {stateModal ? <Modal setStateModal={setStateModal} /> : null}
      <h1>{item.id}</h1>
      <p>{item.name}</p>
      <p>{item.lastName}</p>
      <p>dog</p>
      <div>
        <button>moms</button>
        <button
          onClick={() => dispatch(handleDeleteItem(item.id))}
          type="button"
        >
          DELETE
        </button>
        <button type="button" onClick={() => setStateModal(!stateModal)}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default Item;
