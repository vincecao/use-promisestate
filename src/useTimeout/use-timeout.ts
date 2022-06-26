import { useEffect, useRef } from 'react';

import { TimerRef } from './type';

/**
 * A simple implementation of useTimeout hook. The changes of promise will reset timeout
 * @param f required memorized function, better wrap with useCallback or useMemo
 * @param delay required time delay param
 * @param disabled optional disable trigger
 */
export default function useTimeout<T = unknown>(
  f: () => T,
  delay: number,
  disabled = false
): void {
  const timerRef: TimerRef = useRef(null);

  useEffect(() => {
    if (disabled) return;
    timerRef.current = setTimeout(f, delay);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef?.current);
      }
    };
  }, [delay, f, disabled]);
}
