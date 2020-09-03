import { useLayoutEffect, useState } from 'react';

type WindowSize = {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  function update() {
    setWindowSize(getWindowSize());
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return windowSize;
}

function getWindowSize() {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  };
}
