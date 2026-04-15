import { UploadOutlined } from '@ant-design/icons';
import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
import { Button, message, Spin, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import ImageView from '../../Desc/ImageView';
import './upload.less';
import {
  validateFileCount,
  validateFileRatio,
  validateFileSize,
  validateFileType,
  validateImageSize,
} from './utils';

interface FileType {
  name: string;
  url: string;
}

const acceptType = {
  image: '图片',
};

export interface IUploadImageProps extends Omit<ProFormItemProps, 'accept'> {
  children?: React.ReactNode;
  initFileList?: FileType[]; // 初始值
  max?: number; // 图片数量
  size?: number; // 图片大小
  ratio?: number; // 图片宽高比
  imgSize?: { width: number; height: number }; // 图片宽高像素
  hide?: boolean;
  onChange?: (fileList: FileType[]) => void;
  customOnUpload: (file: File) => Promise<FileType[]>;
}

const accept = 'image';

const UploadImage = (props: IUploadImageProps) => {
  const {
    max = 1,
    size = 10,
    imgSize = null,
    className = '',
    initFileList = [],
    children = <Button icon={<UploadOutlined />}>上传</Button>,
    hide = false,
    label,
    required,
    ratio,
    hidden,
    customOnUpload,
    ...rest
  } = props;
  const [fileList, setFileList] = useState<FileType[]>(initFileList ?? []);
  const [loading, setLoading] = useState(false);

  const requiredProps = {
    required: required,
    // message: `${label}不能为空`,
  };

  const beforeUpload = async (file: File) => {
    setLoading(true);
    let flag = true;
    // 1. 验证文件数量
    if (flag && max && !validateFileCount(fileList.length, max)) {
      flag = false;
      message.error(`最多只能上传${max}个文件`);
    }
    // 2. 验证文件类型
    if (flag && accept && !validateFileType(file, accept)) {
      flag = false;
      message.error(`需上传${acceptType[accept]}类型的文件`);
    }

    // 2_1. 验证图片宽高或者比率
    if (flag && accept === 'image') {
      if (ratio) {
        const res = await validateFileRatio(file, ratio);
        if (!res) message.error(`图片宽高比不符合要求: ${ratio}`);
        flag = res;
      } else if (imgSize) {
        const res = await validateImageSize(
          file,
          imgSize?.width,
          imgSize?.height,
        );
        if (!res)
          message.error(
            `图片宽高不符合要求: ${imgSize?.width}x${imgSize?.height}`,
          );
        flag = res;
      }
    }
    // 3. 验证文件大小
    if (flag && size && !validateFileSize(file, size)) {
      flag = false;
      message.error(`文件大小超出限制: ${size}MB`);
    }
    // 4. 上传到服务器
    if (flag) {
      try {
        const res = await customOnUpload(file);
        setFileList([...fileList, ...res]);
      } catch (error) {
        // console.log(error);
      }
    }

    setLoading(false);
    return false;
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange?.(fileList);
    }
  }, [fileList]);

  return (
    !hide && (
      <div
        className={`common-field ${className}`}
        style={{ display: hidden ? 'none' : undefined }}
      >
        <ProForm.Item {...rest} label={label} rules={[requiredProps]}>
          {fileList.length < max && (
            <Spin spinning={loading}>
              <Upload fileList={[]} beforeUpload={beforeUpload}>
                <div
                  className={[
                    'upload-node',
                    fileList.length > 0 ? 'upload-node-length' : '',
                  ].join(' ')}
                >
                  {children}
                </div>
              </Upload>
            </Spin>
          )}

          <ImageView
            fileList={fileList}
            showDelete
            handleDelete={(_i) => {
              setFileList(fileList.filter((_, index) => index !== _i));
            }}
          />
        </ProForm.Item>
      </div>
    )
  );
};

export default UploadImage;
