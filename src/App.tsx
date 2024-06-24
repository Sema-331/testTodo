import React, { useLayoutEffect, useState } from 'react';
import MainComponent from './components/MainComponent';

function App() {
  const [stateWidth, setStateWidth] = useState<number>(window.innerWidth);

  useLayoutEffect(() => {
    const ahndleResize = () => {
      setStateWidth(window.innerWidth);
    };

    window.addEventListener('resize', ahndleResize);
    return () => {
      window.removeEventListener('resize', ahndleResize);
    };
  }, []);

  const [state, setState] = useState<string>('');

  return (
    <>
      {stateWidth}
      <input
        type="text"
        style={{ border: '1px solid red' }}
        onChange={e => setState(e.target.value)}
        value={state}
      />
      {state.length > 2 ? state : null}
      <MainComponent />
    </>
  );
}

export default App;
