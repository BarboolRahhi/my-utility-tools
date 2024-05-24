import { useEffect, useRef } from "react";

function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const handler = () => savedCallback.current && savedCallback.current();

    const id = setTimeout(handler, delay);

    // Clear timeout if the component is unmounted or if the delay changes.
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;
