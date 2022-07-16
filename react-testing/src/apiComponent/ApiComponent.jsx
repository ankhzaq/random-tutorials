import React from 'react';
import { useGet } from '../hooks/api';

export const DATA_TESTS_IDS = {
  data: 'data',
  error: 'error',
  loading: 'loading',
  unexpected: 'unexpected'
}

const ApiComponent = () => {
  const { data, error, loading } = useGet("https://jsonplaceholder.typicode.com/posts");
  let message = null;
  if (loading) message = <div data-testid={DATA_TESTS_IDS.loading}>Loading...</div>
  else if (error) message = <div data-testid={DATA_TESTS_IDS.error}>Something went wront!</div>
  else if (data) message = <div data-testid={DATA_TESTS_IDS.data}>data retrieved successfully!</div>
  else message = <div data-testid={DATA_TESTS_IDS.unexpected}>unexpected message to show!</div>;
  return (
    <>
      <h3>API Component</h3>
      {message}
    </>
  );
};

export default ApiComponent;
