import React, { useState } from 'react';
import BtnForm from './BtnForm';
import { TodoListInt } from '../Interfaces/Interface';
import { useAppDispatch } from '../helperRedux/helperRedux';
import { handleAddItem } from '../redux/slices/slice';

const Form = () => {
  const dispatch = useAppDispatch();

  const [stateTodo, setStateTodo] = useState<TodoListInt[]>([]);
  const [stateFirst, setStateFirst] = useState<string>('');
  const [stateSecond, setStateSecond] = useState<string>('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const todoItem = {
      id: Date.now(),
      name: stateFirst,
      lastName: stateSecond,
    };
    dispatch(handleAddItem(todoItem));
    setStateTodo([...stateTodo, todoItem]);
    setStateFirst(''); // Очистить поле после добавления
    setStateSecond(''); // Очистить поле после добавления
  };

  return (
    <div>
      <p>Form</p>
      <form onSubmit={addTodo} action="">
        <input
          type="text"
          onChange={e => setStateFirst(e.target.value)}
          value={stateFirst}
          style={{ border: '1px solid red' }}
          placeholder="text1"
        />
        <input
          type="text"
          onChange={e => setStateSecond(e.target.value)}
          value={stateSecond}
          style={{ border: '1px solid red' }}
          placeholder="text2"
        />
        <BtnForm />
      </form>
    </div>
  );
};

export default Form;
