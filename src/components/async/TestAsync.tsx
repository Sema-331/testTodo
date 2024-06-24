import React, { useEffect, useState } from 'react';

interface IntDate {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TestAsync = () => {
  const [stateDate, setStateDate] = useState<IntDate[]>([]);
  const [state, setState] = useState<boolean>(false);

  const getDataFn = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!res.ok) {
        console.log('error');
      }
      const result = await res.json();
      setStateDate(result);
    } catch {
      throw new Error('error');
    }
  };

  return (
    <div>
      <button type="button" onClick={() => setState(!state)}>
        ADD MODAL OPEN
      </button>
      {state ? <button>koko</button> : null}
      <button type="button" onClick={getDataFn}>
        ADD ASYNC FN
      </button>
      <div>
        {stateDate
          .map(item => (
            <div>
              <p>{item.title}</p>
              <p>{item.id}</p>
            </div>
          ))
          .slice(0, 10)}
      </div>
      {stateDate ? <button>dodo</button> : null}
    </div>
  );
};

export default TestAsync;
