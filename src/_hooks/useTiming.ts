import { useInterval } from 'ahooks';
import { useState } from 'react';

interface IProps {
  /** 搜索超时时间 */
  searchTimeout?: number;
}

// 计时器
const useTiming = (props?: IProps) => {
  const { searchTimeout = 60000 } = props || {};

  // 时间
  const [count, setCount] = useState<number>(1);
  // 进度条
  const [percent, setPercent] = useState<number>(0);
  const [running, setRunning] = useState(false);

  useInterval(
    () => {
      setCount((c) => c + 1);

      setPercent((p) => {
        if (p < 50) {
          return 50;
        } else if (p < 90) {
          return p + 10;
        } else if (p <= 98) {
          return p + 1;
        } else {
          return 99;
        }
      });
    },
    searchTimeout / 1000 > count && running ? 1000 : undefined,
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
