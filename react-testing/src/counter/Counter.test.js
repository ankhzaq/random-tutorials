import React from "react";
import Counter from "./counter";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  render(<Counter />);
  const headerEl = screen.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});
