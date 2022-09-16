import type { Ref } from 'react';
import { useEffect, useRef, useState } from 'react';

export default function useStickyRef(type: 'top' | 'bottom', offset: number = 10): [boolean, Ref<HTMLDivElement>] {
  const stickyGateRef = useRef<HTMLDivElement>(null);
  const [enableSticky, setEnableSticky] = useState<boolean>(false);

  useEffect(() => {
    if (!window) return;
    const element = stickyGateRef.current

    function handleScroll() {
      setEnableSticky(element ? (type === 'top' ? element.getBoundingClientRect().top : window.innerHeight - element.getBoundingClientRect().top) < offset : false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [enableSticky, stickyGateRef];
}
