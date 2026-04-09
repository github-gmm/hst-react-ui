import { Space } from 'antd';
import {
  getTimeByDay,
  getTimeByMonth,
  getTimeByYear,
  getToday,
} from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <span>获取本地指定时间或时刻</span>
        <div
          style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column' }}
        >
          <span>今天：{getToday('YYYY-MM-DD HH:mm:ss')}</span>
          <span>此刻：{getToday()}</span>

          <span>7天前：{getTimeByDay(-7, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>7天前的时刻：{getTimeByDay(-7)}</span>

          <span>3月前：{getTimeByMonth(-3, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>3月前的时刻：{getTimeByMonth(-3)}</span>

          <span>1年前：{getTimeByYear(-1, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>1年前的时刻：{getTimeByYear(-1)}</span>

          <span>7天后：{getTimeByDay(7, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>7天后的时刻：{getTimeByDay(7)}</span>

          <span>3月后：{getTimeByMonth(3, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>3月后的时刻：{getTimeByMonth(3)}</span>

          <span>1年后：{getTimeByYear(1, 'YYYY-MM-DD HH:mm:ss')}</span>
          <span>1年后的时刻：{getTimeByYear(1)}</span>
        </div>
      </Space>
    </Space>
  );
};
