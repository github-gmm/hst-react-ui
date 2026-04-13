import { Flex } from 'antd';
import {
  CompContainer,
  FieldForm,
  Fields,
  NavigationBar,
  OptionButton,
  PageContainer,
} from 'hst-react-ui';
import useForm from 'hst-react-ui/hooks/useForm';
import React from 'react';

export default () => {
  const {
    fieldFormRef,
    validateFields,
    dependencyValues,
    setDependencyValues,
  } = useForm();

  const submit = () => {
    validateFields().then((val) => {
      console.log(val);
    });
  };
  return (
    <PageContainer height="500px">
      <NavigationBar
        items={[
          { title: '一级菜单' },
          {
            title: '二级菜单',
            onClick: () => {
              console.log('跳转');
            },
          },
          { title: '三级菜单' },
        ]}
      />
      <CompContainer>
        <FieldForm formRef={fieldFormRef} setDependencies={setDependencyValues}>
          <Fields.Text
            label="纯文本"
            name="text1"
            required
            isShowCount
            onChange={(value) => {
              console.log('查询纯文本', value);
            }}
          />
          <Fields.Lov
            label="枚举"
            name="currency"
            item={[
              {
                label: 'USD',
                value: 'USD',
              },
              {
                label: 'KZT',
                value: 'KZT',
              },
            ]}
          />
          <Fields.Digit
            label="数字"
            name="text3"
            min={1}
            max={100}
            suffix={dependencyValues?.currency}
          />
        </FieldForm>
        <Flex
          justify="center"
          style={{
            marginTop: 10,
          }}
        >
          <OptionButton type="primary" onClick={submit}>
            提交
          </OptionButton>
        </Flex>
      </CompContainer>
    </PageContainer>
  );
};
