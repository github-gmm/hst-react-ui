import { Space } from 'antd';
import { formatTime } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>普通日期转成普通日期</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>2022-01-02：{formatTime('2022-01-02', 'DD.MM.YYYY')}</span>
          <span>
            2022-01-02：{formatTime('2022-01-02', 'DD.MM.YYYY HH:mm:ss')}
          </span>
          <span>
            2022-01-02 21:00:00：
            {formatTime('2022-01-02 21:00:00', 'DD.MM.YYYY HH:mm:ss')}
          </span>
        </div>
      </Space>
    </Space>
  );
};
