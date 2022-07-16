import ApiComponent, { DATA_TESTS_IDS } from './ApiComponent';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';


const mock = {
  fetchError: () => {
    global.fetch = jest.fn(() =>
      Promise.reject({ message: 'Mock Error' }));
  },
  fetchSuccess: () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([])
    }));
  }
}

test("call error", async () => {
  mock.fetchError();
  render(<ApiComponent />);
  await waitForElementToBeRemoved(() =>
    screen.getByTestId(DATA_TESTS_IDS.loading))
  expect(screen.getByTestId(DATA_TESTS_IDS.error)).toBeInTheDocument();
})

test("call success", async () => {
  mock.fetchSuccess();
  render(<ApiComponent />);
  await waitForElementToBeRemoved(() =>
    screen.getByTestId(DATA_TESTS_IDS.loading))
  expect(screen.getByTestId(DATA_TESTS_IDS.data)).toBeInTheDocument();
})
