import { TabList } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <TabList
      tabStyle="card_1"
      items={[
        {
          label: '标签1',
          value: '1',
        },
        {
          label: '标签2',
          value: '2',
        },
      ]}
    />
  );
};
