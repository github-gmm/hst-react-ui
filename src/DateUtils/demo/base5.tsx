import { Space } from 'antd';
import { formatTime } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>TZ日期转成普通日期</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>
            2022-01-02T00:00:00+05:00 不转化：
            {formatTime('2022-01-02T00:00:00+05:00', 'YYYY-MM-DD HH:mm:ss')}
          </span>
          <span>
            2022-01-02T00:00:00+05:00 转成 加拿大多伦多时间 ：
            {formatTime('2022-01-02T00:00:00+05:00', 'YYYY-MM-DD HH:mm:ss', {
              timezone: 'America/Toronto',
            })}
          </span>
          <span>
            2022-01-02T00:00:00+05:00 转成 东二区时间 ：
            {formatTime('2022-01-02T00:00:00+05:00', 'YYYY-MM-DD HH:mm:ss', {
              utc: 2,
            })}
          </span>
        </div>
      </Space>
    </Space>
  );
};
