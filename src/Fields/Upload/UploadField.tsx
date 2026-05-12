import './upload.less';

import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
import { Spin, Upload } from 'antd';
import React, { useEffect, useState } from 'react';

import FileView from '../../Desc/FileView/FileView';
import ImageView from '../../Desc/ImageView/ImageView';
import { validateCommon } from './validate/validateCommon';
import { validateImage } from './validate/validateImage';

export type FileType = { name?: string; url?: string };

export interface IUploadFieldProps extends ProFormItemProps {
  max?: number;
  size?: number;
  hide?: boolean;
  hidden?: boolean;
  fileList: FileType[];
  children?: React.ReactNode;
  accept?: 'image' | 'excel' | 'audio' | 'video' | 'none';
  acceptInfo?: {
    size?: number; // 图片大小 mb
    ratio?: number; // 图片宽高比 1
    imgSize?: { width: number; height: number }; // 图片宽高像素 {width: 100, height: 100}
  };
  customOnUpload: (file: File) => Promise<FileType | void>;
  onChange: (fileList: FileType[]) => void;
}

const UploadField = (props: IUploadFieldProps) => {
  const {
    max = 1,
    accept = 'none',
    size = 10,
    acceptInfo = {},
    fileList = [],
    hide,
    hidden,
    required,
    children,
    onChange = () => {},
    customOnUpload,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const [newFileList, setNewFileList] = useState(fileList);

  const requiredProps = {
    required: required,
  };

  const beforeUpload = async (file: File) => {
    let flag = validateCommon({
      max,
      fileLength: newFileList.length,
      accept,
      file,
      size,
    });
    if (!flag) return flag;

    flag = await validateImage({
      accept,
      acceptInfo,
      file,
    });
    if (!flag) return flag;

    setLoading(true);
    const data: any = (await customOnUpload(file)) || {};
    if (data?.url) {
      setNewFileList([data as FileType, ...newFileList]);
      onChange([data as FileType, ...newFileList]);
    }
    setLoading(false);

    return false;
  };

  const handleDel = (_i: number) => {
    setNewFileList(newFileList.filter((_, index) => index !== _i));
    onChange(newFileList.filter((_, index) => index !== _i));
  };

  useEffect(() => {
    setNewFileList(fileList);
  }, [fileList]);

  return (
    !hide && (
      <div
        className={['common-field'].join(' ')}
        style={{ display: hidden ? 'none' : undefined }}
      >
        <ProForm.Item {...rest} rules={[requiredProps, ...(rest?.rules || [])]}>
          {newFileList.length < max && (
            <Spin spinning={loading}>
              <Upload fileList={[]} beforeUpload={beforeUpload}>
                <div className={'upload-node'}>{children}</div>
              </Upload>
            </Spin>
          )}

          {accept === 'image' ? (
            <ImageView
              fileList={newFileList}
              showDelete
              handleDelete={handleDel}
            />
          ) : (
            <FileView
              fileList={newFileList}
              showDelete
              handleDelete={handleDel}
            />
          )}
        </ProForm.Item>
      </div>
    )
  );
};

export default UploadField;
