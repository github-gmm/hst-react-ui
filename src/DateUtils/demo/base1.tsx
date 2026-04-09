import { Space } from 'antd';
import { getTimeOffset, getTimeUtc, getTimezone } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>纽约</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>地区timezone：{'America/New_York'}</span>
          <span>冬令时区utc：{getTimeUtc('America/New_York', '2026-1-1')}</span>
          <span>夏令时区utc：{getTimeUtc('America/New_York', '2026-7-1')}</span>
          <span>
            冬令偏移量offset：{getTimeOffset('America/New_York', '2026-1-1')}
          </span>
          <span>
            夏令偏移量offset：{getTimeOffset('America/New_York', '2026-5-1')}
          </span>
        </div>

        <span>当地</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>地区timezone：{getTimezone()}</span>
          <span>时区utc：{getTimeUtc(getTimezone())}</span>
          <span>偏移量offset：{getTimeOffset(getTimezone())}</span>
        </div>
      </Space>
    </Space>
  );
};
