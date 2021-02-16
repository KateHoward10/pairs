import { useEffect, useRef } from 'react';

type Callback = () => ( unknown | void );

export default function useInterval(callback: Callback, delay: number | null) {
  const savedCallback = useRef<Callback | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback?.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
