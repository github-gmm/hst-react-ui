import { useDebounceFn } from 'ahooks';
import { useEffect, useRef, useState } from 'react';

/**
 * 监听元素宽度
 */
export default function useElementWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const { run: handleChangeWidth } = useDebounceFn(
    (w: number) => {
      setWidth(w);
    },
    {
      wait: 200,
    },
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      handleChangeWidth(entry.contentRect.width);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, []);

  return { ref, width };
}
