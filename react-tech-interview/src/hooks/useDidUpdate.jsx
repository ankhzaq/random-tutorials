import { useEffect, useRef } from 'react';

const useDidUpdate = (func, inputs) => {

  const mountRef = useRef(false);

  useEffect(() => {
    if (mountRef.current) func();
    else mountRef.current = true;
  }, inputs)
}

export default useDidUpdate;
