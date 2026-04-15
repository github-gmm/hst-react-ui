import { useInterval } from 'ahooks';
import { useState } from 'react';

// 计时器
const useTiming = () => {
  // 时间
  const [count, setCount] = useState<number>(1);
  // 进度条
  const [percent, setPercent] = useState<number>(0);
  const [running, setRunning] = useState(false);

  useInterval(
    () => {
      setCount((c) => c + 1);
    },
    running ? 1000 : undefined,
  );

  useInterval(
    () => {
      setPercent((p) => {
        if (p < 95) {
          return p + 1;
        } else {
          return 96;
        }
      });
    },
    running ? 400 : undefined,
  );

  // 开始
  const open = () => {
    setRunning(true);
  };
  // 暂停
  const pause = () => {
    setRunning(false);
  };
  // 重新开始
  const reOpen = () => {
    setCount(1);
    setPercent(0);
    setRunning(true);
  };

  return { count, running, percent, open, pause, reOpen, setPercent };
};

export default useTiming;
