import { Button, Space } from 'antd';
import { CompContainer, H4, NavigationBar, TableList } from 'hst-react-ui';
import React from 'react';
import CardContainer from '../CardContainer';

export default () => {
  return (
    <CompContainer style={{ width: 300 }}>
      <CardContainer
        style={{ background: '#eee' }}
        header={
          <NavigationBar
            title={<H4>1111</H4>}
            extra={
              <Space>
                <Button type="primary">一级按钮</Button>
                <Button>二级按钮</Button>
              </Space>
            }
          />
        }
      >
        <TableList
          columns={[
            {
              title: '姓名',
              dataIndex: 'name',
            },
            {
              title: '姓名1',
              dataIndex: 'name1',
            },
            {
              title: '姓名2',
              dataIndex: 'name2',
            },
          ]}
          dataSource={[[]]}
          pagination={false}
          search={false}
          options={false}
        />
      </CardContainer>
      <CardContainer
        style={{ background: '#eee' }}
        header={
          <NavigationBar
            title={<H4>1111</H4>}
            extra={
              <Space>
                <Button type="primary">一级按钮</Button>
                <Button>二级按钮</Button>
              </Space>
            }
          />
        }
      >
        222
      </CardContainer>
      <CardContainer style={{ background: '#eee', padding: '0 10px' }}>
        222
      </CardContainer>
    </CompContainer>
  );
};
