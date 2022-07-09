import React from "react";
import Counter, { DATA_TESTS_IDS } from './Counter';
import { fireEvent, render, screen } from '@testing-library/react';

const INITIAL_INPUT_VALUE = "1";
const INITIAL_COUNTER_VALUE = "0";

test("header renders with correct text", () => {
  render(<Counter />);
  const headerEl = screen.getByTestId(DATA_TESTS_IDS.header);

  expect(headerEl.textContent).toBe("My Counter");
});

test(`counter initially start with text of ${INITIAL_COUNTER_VALUE}`, () => {
  render(<Counter />);
  const counterEl = screen.getByTestId(DATA_TESTS_IDS.counter);

  expect(counterEl.textContent).toBe(INITIAL_COUNTER_VALUE);
});

test(`input contains initial value of ${INITIAL_INPUT_VALUE}`, () => {
  render(<Counter />);
  const inputEl = screen.getByTestId(DATA_TESTS_IDS.input);

  expect(inputEl.value).toBe(INITIAL_INPUT_VALUE);
});


test("add button renders with +", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId(DATA_TESTS_IDS.addBtn);

  expect(addBtn.textContent).toBe("+")
});

test("subtract button renders with -", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId(DATA_TESTS_IDS.subtractBtn);

  expect(subtractBtn.textContent).toBe("-")
});

test("change value of input works correctly", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId(DATA_TESTS_IDS.input);

  expect(inputEl.value).toBe(INITIAL_INPUT_VALUE);

  const mockChangeProp = {
    target: {
      value: "5"
    }
  }

  fireEvent.change(inputEl, mockChangeProp);
  expect(inputEl.value).toBe("5");
});

test("change counter value with add btn", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId(DATA_TESTS_IDS.counter);

  expect(counterEl.textContent).toBe(INITIAL_COUNTER_VALUE);

  const addBtn = screen.getByTestId(DATA_TESTS_IDS.addBtn);
  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe((Number(INITIAL_COUNTER_VALUE) + 1).toString());
});

test("change counter value with subtract btn", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId(DATA_TESTS_IDS.counter);

  expect(counterEl.textContent).toBe(INITIAL_COUNTER_VALUE);

  const subtractBtn = screen.getByTestId(DATA_TESTS_IDS.subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe((Number(INITIAL_COUNTER_VALUE) - 1).toString());
});


test("add to input and then, add to counter and subtract to counter", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId(DATA_TESTS_IDS.counter);
  const addBtn = screen.getByTestId(DATA_TESTS_IDS.addBtn);
  const inputEl = screen.getByTestId(DATA_TESTS_IDS.input);

  expect(inputEl.value).toBe(INITIAL_INPUT_VALUE);

  const NEXT_INPUT_VALUE = "3";

  const inputChangeProp = {
    target: {
      value: NEXT_INPUT_VALUE
    }
  }

  fireEvent.change(inputEl, inputChangeProp);

  expect(inputEl.value).toBe(NEXT_INPUT_VALUE);

  fireEvent.click(addBtn);

  const nextCounterValue = (Number(INITIAL_COUNTER_VALUE) + Number(NEXT_INPUT_VALUE)).toString();
  expect(counterEl.textContent).toBe(nextCounterValue);
})
