import { Flex } from 'antd';
import {
  CompContainer,
  FieldForm,
  Fields,
  NavigationBar,
  OptionButton,
  PageContainer,
} from 'hst-react-ui';
import useForm from 'hst-react-ui/_hooks/useForm';
import React from 'react';

export default () => {
  const { fieldFormRef, validateFields } = useForm();

  const submit = () => {
    validateFields().then((val) => {
      console.log(val);
    });
  };

  const init = {};

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
        <FieldForm
          formRef={fieldFormRef}
          initialValues={init}
          style={{
            width: '70%',
          }}
          labelAlign="left"
        >
          <Fields.Text
            label="纯文本"
            name="text1"
            required
            isShowCount
            onChange={(value) => {
              console.log('查询纯文本', value);
            }}
          />
          <Fields.Text hide={true} label="纯文本1" name="text2" required />
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
          <Fields.Digit label="数字" name="text3" min={1} max={100} />
          <Fields.UploadFile
            label="文件"
            name="path"
            customOnUpload={async () => {
              return [
                {
                  url: '',
                  name: '',
                },
              ];
            }}
            initFileList={[
              {
                url: '111',
                name: '111',
              },
            ]}
            onChange={(fileList) => {
              const url = fileList?.length > 0 ? fileList[0]?.url : '';
              fieldFormRef.current?.setFieldValue('path1', url || '');
            }}
          />
          <Fields.UploadFile
            label="文件"
            name="path1"
            customOnUpload={async () => {
              return [
                {
                  url: '',
                  name: '',
                },
              ];
            }}
            initFileList={[
              {
                url: '111',
                name: '111',
              },
            ]}
            onChange={(fileList) => {
              const url = fileList?.length > 0 ? fileList[0]?.url : '';
              fieldFormRef.current?.setFieldValue('path1', url || '');
            }}
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
