import React, { useCallback, useMemo, useState } from 'react';
import FormTodo from './FormTodo';
import { TodoListInt } from '../../Interfaces/Interface';
import ItemTodo from './ItemTodo';

const MainTodo = () => {
  const [state, setState] = useState<TodoListInt[]>([]);
  const [stateInput1, setStateInput1] = useState<string>('');
  const [stateInput2, setStateInput2] = useState<string>('');

  const addTodod = useCallback(
    (e: React.FormEvent) => {
      console.log('addtodo');
      e.preventDefault();
      const todo = {
        id: Date.now(),
        name: stateInput1,
        lastName: stateInput2,
      };
      setState(prev => [...prev, todo]);
      setStateInput1('');
      setStateInput2('');
    },
    [stateInput2, stateInput1]
  );

  console.log(stateInput1, stateInput2);

  const value = useMemo(
    () => ({
      stateInput1,
      setStateInput1,
      stateInput2,
      setStateInput2,
      addTodod,
    }),
    [stateInput1, setStateInput1, stateInput2, setStateInput2, addTodod]
  );

  return (
    <div>
      <FormTodo value={value} />
      {state.map(item => (
        <ItemTodo item={item} />
      ))}
    </div>
  );
};

export default MainTodo;
