import { Space } from 'antd';
import { maxNum, minNum, sameNum } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>比较大小</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>1.1 大于 1.1： {maxNum('1.1', '1.1') ? '对' : '错'}</span>
          <span>1.1 大于 1： {maxNum('1.1', '1') ? '对' : '错'}</span>
          <span>0 大于 1： {maxNum('0', '1') ? '对' : '错'}</span>
          <span>0 大于 0.000： {maxNum('0', '0.000') ? '对' : '错'}</span>

          <span>1.1 小于 1.1： {minNum('1.1', '1.1') ? '对' : '错'}</span>
          <span>1.1 小于 1： {minNum('1.1', '1') ? '对' : '错'}</span>
          <span>0 小于 1： {minNum('0', '1') ? '对' : '错'}</span>
          <span>0 小于 0.000： {minNum('0', '0.000') ? '对' : '错'}</span>

          <span>1.1 等于 1.1： {sameNum('1.1', '1.1') ? '对' : '错'}</span>
          <span>1.1 等于 1： {sameNum('1.1', '1') ? '对' : '错'}</span>
          <span>0 等于 1： {sameNum('0', '1') ? '对' : '错'}</span>
          <span>0 等于 0.000： {sameNum('0', '0.000') ? '对' : '错'}</span>
        </div>
      </Space>
    </Space>
  );
};
