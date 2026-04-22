import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
import { Spin, Upload } from 'antd';
import React, { useState } from 'react';
import FileView from '../../Desc/FileView/FileView';
import styles from './upload.less';

type FileType = { name: string; url: string };

interface IUploadFieldProps extends ProFormItemProps {
  hide?: boolean;
  fileList: FileType[];
  children?: React.ReactNode;
  customOnUpload: (file: File) => void;
  onChange: (fileList: FileType[]) => void;
}

const UploadField = (props: IUploadFieldProps) => {
  const {
    hide,
    required,
    children,
    fileList,
    onChange = () => {},
    customOnUpload,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);

  const requiredProps = {
    required: required,
  };

  const beforeUpload = async (file: File) => {
    setLoading(true);
    await customOnUpload(file);
    setLoading(false);

    return false;
  };

  return (
    !hide && (
      <div className={[styles['common-field']].join(' ')}>
        <ProForm.Item {...rest} rules={[requiredProps]}>
          <Spin spinning={loading}>
            <Upload fileList={[]} beforeUpload={beforeUpload}>
              <div className={styles['upload-node']}>{children}</div>
            </Upload>
          </Spin>

          <FileView
            fileList={fileList}
            showDelete
            handleDelete={(_i) => {
              onChange(fileList.filter((_, index) => index !== _i));
            }}
          />
        </ProForm.Item>
      </div>
    )
  );
};

export default UploadField;
