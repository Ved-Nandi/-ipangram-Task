import React, { useEffect, useState } from 'react';

export const useDebounce: <T>(value: T, delay: number) => T =(value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState< typeof value >(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
