import React, { useState } from 'react';
import './index.css';
import { Dropdown } from '../Dropdown/Dropdown';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [selectedOS, setSelectedOS] = useState(null);


  function getModifier() {
    if (counter > 0) return 'counter__title--increment';
    if (counter < 0) return 'counter__title--decrement';
    return '';
  }


  return (
    <div className='counter'>
      <h1 className={`counter__title ${getModifier()}`}>{counter}</h1>
      <section className='buttons'>
        <button
          onClick={() => setCounter(counter + 1)}
          className='button button--increment'
          testid='btn-increment'
        >
          Increase
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className='button button--decrement'
          testid='btn-decrement'

        >
          Decrease
        </button>
      </section>
      <div>

        <div className='dropdown'>
          {selectedOS && <div>Your Operation System: {selectedOS}</div>}
          <Dropdown
            title='Choice your OS'
            options={['MacOS', 'Ubuntu', 'Windows']}
            onSelect={setSelectedOS}
          />
        </div>
      </div>
    </div>

  );
}

export default Counter;
