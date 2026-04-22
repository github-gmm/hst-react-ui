import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

interface IProps {
  children: React.ReactNode;
}

const H1 = (props: IProps) => {
  const { children } = props;
  return <Title style={{ padding: 0, margin: 0 }}>{children}</Title>;
};
const H2 = (props: IProps) => {
  const { children } = props;
  return (
    <Title level={2} style={{ padding: 0, margin: 0 }}>
      {children}
    </Title>
  );
};
const H3 = (props: IProps) => {
  const { children } = props;
  return (
    <Title level={3} style={{ padding: 0, margin: 0 }}>
      {children}
    </Title>
  );
};
const H4 = (props: IProps) => {
  const { children } = props;
  return (
    <Title level={4} style={{ padding: 0, margin: 0 }}>
      {children}
    </Title>
  );
};
const H5 = (props: IProps) => {
  const { children } = props;
  return (
    <Title level={5} style={{ padding: 0, margin: 0 }}>
      {children}
    </Title>
  );
};

export { H1, H2, H3, H4, H5 };
