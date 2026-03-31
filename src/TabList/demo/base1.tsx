import { TabList } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <TabList
      items={[
        {
          label: '标签1',
          value: '1',
        },
        {
          label: '标签2',
          value: '2',
          disabled: true,
        },
        {
          label: '标签3',
          value: '',
        },
      ]}
    />
  );
};
