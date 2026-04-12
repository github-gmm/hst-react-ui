import { TabList } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <TabList
        tabStyle="card"
        items={[
          {
            label: '标签dvfgfhghgjhgjhk1',
            value: '1',
          },
          {
            label: '标签dfdgfhgfhgcxcxcxcd2',
            value: '2',
            disabled: true,
          },
          {
            label: '标签sdsfdgfdgfdhgfhgjghj3',
            value: '3',
          },
          {
            label: '标签4',
            value: '4',
          },
          {
            label: '标签5',
            value: '5',
          },
          {
            label: '标签6',
            value: '6',
          },
          {
            label: '标签7',
            value: '7',
          },
          {
            label: '标签8',
            value: '8',
          },
          {
            label: '标签9',
            value: '9',
          },
          {
            label: '标签10',
            value: '10',
          },
        ]}
      />
      <TabList
        tabStyle="card"
        layout="vertical"
        items={[
          {
            label: '标签dvfgfhghgjhgjhk1',
            value: '1',
          },
          {
            label: '标签dfdgfhgfhgcxcxcxcd2',
            value: '2',
            disabled: true,
          },
          {
            label: '标签sdsfdgfdgfdhgfhgjghj3',
            value: '3',
          },
          {
            label: '标签4',
            value: '4',
          },
          {
            label: '标签5',
            value: '5',
          },
          {
            label: '标签6',
            value: '6',
          },
          {
            label: '标签7',
            value: '7',
          },
          {
            label: '标签8',
            value: '8',
          },
          {
            label: '标签9',
            value: '9',
          },
          {
            label: '标签10',
            value: '10',
          },
        ]}
      />
    </div>
  );
};
