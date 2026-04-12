import type { CSSProperties, ReactNode } from 'react';
import React, { useMemo } from 'react';
import './PageContainer.less';

export interface IVaPageProps {
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children?: ReactNode;
}

/** 页面组件 */
export const CompContainer = (props: IVaPageProps) => {
  const { className = '', style, children } = props;

  const pageStyle = useMemo(
    () => ({
      ...style,
    }),
    [style],
  );

  return (
    <div
      className={`comp-page ${className}`}
      style={pageStyle as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default CompContainer;
