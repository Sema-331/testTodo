import React from 'react';

const FormTodo = ({ value }: any) => {
  console.log('formtodo');
  return (
    <form onSubmit={value.addTodod} action="">
      <input
        onChange={e => value.setStateInput1(e.target.value)}
        value={value.stateInput1}
        type="text"
        style={{ border: '1px solid red' }}
      />
      <input
        onChange={e => value.setStateInput2(e.target.value)}
        value={value.stateInput2}
        type="text"
        style={{ border: '1px solid red' }}
      />
      <button type="submit">BTN</button>
    </form>
  );
};

export default FormTodo;
