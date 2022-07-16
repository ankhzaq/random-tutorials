import { useEffect, useState } from 'react';


export const useGet = (url) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    network: 'loading',
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setState({
            data: json,
            error: null,
            network: 'success'
          });
        }, 500);
      })
      .catch((err) => {
        setState({
          data: null,
          error: err.message,
          network: 'error'
        });
      });
  }, []);

  return {
    data: state.data,
    error: state.error,
    loading: state.network === 'loading',
  };
}
