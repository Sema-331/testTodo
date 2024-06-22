import React from 'react';
import Items from './Items';
import AnyOptions from './AnyOptions';
import Container from './Containers/Container';
import Form from './Form';

const MainComponent = () => {
  return (
    <Container>
      <Form />
      <Items />
      <AnyOptions />
    </Container>
  );
};

export default MainComponent;
