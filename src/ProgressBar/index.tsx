import { Progress } from 'antd';
import { useMemo } from 'react';

import React from 'react';
import './index.less';

type IProps = {
  /** 进度 */
  percent: number;
  /** 是否隐藏进度数字 */
  hidePercent?: boolean;
  /** 是否展示动画 */
  animate?: boolean;
  /** 进度数字颜色 */
  percentColor?: string;
  /** 进度条进行中颜色 */
  strokeColorActive?: string;
  /** 进度条完成颜色 */
  strokeColorSuccess?: string;
  /** 进度条宽度 */
  width?: number;
};

const ProgressBar = (props: IProps) => {
  const {
    width = 18,
    strokeColorActive = '',
    percentColor = '#FFFFFF',
    strokeColorSuccess = '',
    hidePercent = false,
    animate = false,
  } = props;

  const progressStyle = useMemo(
    () => ({
      '--stroke-color': strokeColorActive,
      '--stroke-color-success': strokeColorSuccess,
      '--percent-color': percentColor,
    }),
    [percentColor, strokeColorActive, strokeColorSuccess],
  );

  return (
    <div
      className={['progress-bar', animate ? 'progress-bar-animate' : ''].join(
        ' ',
      )}
    >
      <Progress
        status="success"
        size={['100%', width]}
        percent={props.percent}
        showInfo={!hidePercent}
        percentPosition={{ align: 'center', type: 'inner' }}
        style={progressStyle as React.CSSProperties}
      />
    </div>
  );
};

export default ProgressBar;
