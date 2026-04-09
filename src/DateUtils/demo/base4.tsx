import { Space } from 'antd';
import { formatTime } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>普通日期转成TZ日期</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>
            2022-01-02：{formatTime('2022-01-02', 'YYYY-MM-DDTHH:mm:ssZ')}
          </span>
          <span>
            2022-01-02：
            {formatTime('2022-01-02', 'YYYY-MM-DDTHH:mm:ssZ', {
              offset: '+01:00',
            })}
          </span>
          <span>
            2022-01-02：
            {formatTime('2022-01-02', 'YYYY-MM-DDTHH:mm:ssZ', {
              utc: 2,
            })}
          </span>
          <span>
            2022-01-02：
            {formatTime('2022-01-02', 'YYYY-MM-DDTHH:mm:ssZ', {
              timezone: 'America/Toronto',
            })}
          </span>
        </div>
      </Space>
    </Space>
  );
};
