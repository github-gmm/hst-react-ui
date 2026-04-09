import { Space } from 'antd';
import { formatNum } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>千分位</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>
            12343543546546757: {formatNum('12343543546546757', 'Thousands')}
          </span>
          <span>
            12343543546546757:{' '}
            {formatNum('12343543546546757', 'Thousands', { precision: 2 })}
          </span>
        </div>

        <span>百分比</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>0.12 {formatNum('0.12', 'Percent')}</span>
          <span>0.12 {formatNum('0.12', 'Percent', { precision: 2 })}</span>
        </div>

        <span>四舍五入</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>12.345456 {formatNum('12.345456', 'Precision')}</span>
          <span>
            12.345456 {formatNum('12.345456', 'Precision', { precision: 3 })}
          </span>
        </div>
      </Space>
    </Space>
  );
};
