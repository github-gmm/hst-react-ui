import { Space } from 'antd';
import { formatTime } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>TZ日期转成TZ日期</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>
            2022-01-02T00:00:00+05:00 不转化（无意义）：
            {formatTime('2022-01-02T00:00:00+05:00', 'YYYY-MM-DDTHH:mm:ssZ')}
          </span>
        </div>
      </Space>
    </Space>
  );
};
