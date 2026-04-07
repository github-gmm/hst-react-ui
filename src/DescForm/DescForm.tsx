import React, { useMemo } from 'react';
import './DescForm.less';

interface IDescFormProps {
  children: React.ReactNode;
  labelWidth?: number;
}
const DescForm = (props: IDescFormProps) => {
  const { children, labelWidth } = props;

  const labelStyle = useMemo(() => {
    return { '--desc-label-width': labelWidth ? `${labelWidth}px` : '100px' };
  }, [labelWidth]);

  return (
    <div className="desc-view" style={labelStyle as React.CSSProperties}>
      {children}
    </div>
  );
};

export default DescForm;
