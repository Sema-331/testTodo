// Container.tsx
import React, { ReactNode } from 'react';

interface IntChildren {
  children: ReactNode;
}

const Container = ({ children }: IntChildren) => {
  return <div>{children}</div>;
};

export default Container;
