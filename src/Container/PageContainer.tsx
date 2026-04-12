import './PageContainer.less';

import type { CSSProperties, ReactNode } from 'react';
import React, { useMemo } from 'react';

export interface IVaPageProps {
  /** 高度，默认 calc(100vh - 56px) */
  height?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children?: ReactNode;
}

/** 页面组件 */
export const PageContainer = (props: IVaPageProps) => {
  const {
    height = 'calc(100vh - 56px)',
    className = '',
    style,
    children,
  } = props;

  const pageStyle = useMemo(
    () => ({
      '--page-height': height,
      ...style,
    }),
    [height, style],
  );

  return (
    <div
      className={`page ${className}`}
      style={pageStyle as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default PageContainer;
