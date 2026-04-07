import { Descriptions, DescriptionsProps } from 'antd';
import { DescriptionsItemType } from 'antd/es/descriptions';
import React, { useMemo } from 'react';
import './DescList.less';

export interface IDescListProps extends Omit<DescriptionsProps, 'items'> {
  items?: (
    | {
        key?: string;
        label?: string | React.ReactNode;
        children?: string | React.ReactNode;
        span?: number;
      }
    | boolean
  )[];
  /** 字段宽度 */
  labelWidth?: number;
}
const DescList = (props: IDescListProps) => {
  const { items = [], column = 1, labelWidth, ...rest } = props;

  const newItem = items.filter((res) => res);

  newItem.forEach((item: any, _i) => {
    item['key'] = `${_i}`;
  });

  const descStyle = useMemo(
    () => ({
      '--desc-list-label-width': labelWidth ? `${labelWidth}px` : '100px',
    }),
    [labelWidth],
  );

  if (newItem && newItem.length === 0) return null;

  return (
    <div className="desc-list" style={descStyle as React.CSSProperties}>
      <Descriptions
        {...rest}
        title=""
        bordered
        size="small"
        column={column}
        items={newItem as DescriptionsItemType[]}
      />
    </div>
  );
};

export default DescList;
