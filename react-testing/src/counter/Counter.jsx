import React, { useState } from 'react';
import './counter.css';

export const DATA_TESTS_IDS = {
  addBtn: "add-btn",
  counter: "counter",
  input: "input",
  header: "header",
  subtractBtn: "subtract-btn"
}

export const getCounterClassByValue = (value) => value ? (value > 0 ? 'color-primary' : 'color-danger') : '';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const onChangeInput = (e) => {
    setInputValue(Number(e.target.value));
  }

  const onPlusCounter = () => setCounterValue(counterValue + inputValue);
  const onSubtractCounter = () => setCounterValue(counterValue - inputValue);

  const counterClass = getCounterClassByValue(counterValue);

  return (
    <div>
      <h3 data-testid={DATA_TESTS_IDS.header}>My Counter</h3>
      <h2 className={counterClass} data-testid={DATA_TESTS_IDS.counter}>{counterValue}</h2>
      <button
        data-testid={DATA_TESTS_IDS.subtractBtn}
        onClick={onSubtractCounter}
      >-</button>
      <input
        className="text-center"
        data-testid={DATA_TESTS_IDS.input}
        onChange={onChangeInput}
        type="number"
        value={inputValue}
      />
      <button
        data-testid={DATA_TESTS_IDS.addBtn}
        onClick={onPlusCounter}
      >+</button>
    </div>
  );
}

export default Counter;
