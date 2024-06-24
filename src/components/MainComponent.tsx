import React from 'react';
import Items from './Items';
import AnyOptions from './AnyOptions';
import Container from './Containers/Container';
import Form from './Form';
import TestAsync from './async/TestAsync';
import MainTodo from './OptimizTodo/MainTodo';

const MainComponent = () => {
  return (
    <>
      <MainTodo />
      <Container>
        <Form />
        <Items />
        <AnyOptions />
        <TestAsync />
      </Container>
    </>
  );
};

export default MainComponent;
