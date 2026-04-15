import './FieldForm.less';

import type { ProFormProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import React, { useEffect, useMemo } from 'react';

export interface IFieldFormProps
  extends Omit<ProFormProps, 'submitter' | 'onValuesChange'> {
  labelWith?: number;
  children?: React.ReactNode;
  setDependencies?: (values: Record<string, any>) => void;
}

const FieldForm = (props: IFieldFormProps) => {
  const {
    labelWith = 120,
    labelAlign = 'right',
    layout = 'horizontal',
    colon = false,
    formRef,
    style,
    children,
    initialValues,
    setDependencies = () => {},
    ...rest
  } = props;

  const formStyle = useMemo(
    () => ({
      '--form-label-width': labelWith + 'px',
      ...style,
    }),
    [labelWith, style],
  );

  useEffect(() => {
    setDependencies(initialValues as any);
  }, [initialValues]);

  return (
    <ProForm
      {...rest}
      submitter={false}
      formRef={formRef}
      colon={colon}
      layout={layout}
      labelAlign={labelAlign}
      initialValues={initialValues}
      className={'field-form'}
      style={formStyle as React.CSSProperties}
      onValuesChange={(_, values) => {
        setDependencies(values);
      }}
    >
      {children}
    </ProForm>
  );
};

export default FieldForm;
