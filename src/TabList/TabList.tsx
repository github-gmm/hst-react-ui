import { Tabs, TabsProps } from 'antd';

import React from 'react';
import './TabList.less';

type TabStyle = 'line' | 'card' | 'card_1';

type TabClass = 'tab-list-line' | 'tab-list-card' | 'tab-list-card-1';

export interface ITabListProps
  extends Omit<TabsProps, 'items' | 'onChange' | 'activeKey'> {
  tabStyle?: TabStyle;
  items: {
    label: string;
    value: string;
    disabled?: boolean;
    children?: React.ReactNode;
  }[];
  style?: React.CSSProperties;
  activeKey?: string;
  layout?: 'horizontal' | 'vertical';
  onChange?: (key: string) => void;
}

const TabClassNames: Record<TabStyle, TabClass> = {
  line: 'tab-list-line',
  card: 'tab-list-card',
  card_1: 'tab-list-card-1',
};

const TabTypes: Record<TabStyle, TabsProps['type']> = {
  line: 'line',
  card: 'card',
  card_1: 'card',
};

const TabList = (props: ITabListProps) => {
  const {
    tabStyle = 'line',
    items = [],
    activeKey,
    style,
    onChange = () => {},
    ...rest
  } = props;

  const { layout = tabStyle === 'line' ? 'horizontal' : '' } = props;

  const newItems = items
    .map((item) => {
      return {
        ...item,
        key: item.value,
      };
    })
    .filter((v) => v.key);

  if (newItems && newItems?.length === 0) {
    return null;
  }

  const tabClassName = TabClassNames[tabStyle];
  const tabType = TabTypes[tabStyle];

  const layoutClassName = `tab-${layout}`;

  return (
    <div className={[tabClassName, layoutClassName].join(' ')} style={style}>
      <Tabs
        {...rest}
        type={tabType}
        items={newItems}
        activeKey={activeKey}
        onChange={onChange}
        indicator={{ size: (origin) => origin - 10, align: 'center' }}
      />
    </div>
  );
};

export default TabList;
