import { UploadOutlined } from '@ant-design/icons';
import { ProForm, type ProFormItemProps } from '@ant-design/pro-components';
import { Button, message, Spin, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import FileView from '../../Desc/FileView';
import './upload.less';
import { validateFileCount, validateFileSize, validateFileType } from './utils';

interface FileType {
  name: string;
  url: string;
}

const acceptType = {
  excel: '表格',
  audio: '音频',
  video: '视频',
};

export interface IUploadFileProps extends Omit<ProFormItemProps, 'accept'> {
  children?: React.ReactNode;
  accept?: 'excel' | 'audio' | 'video' | 'none';
  initFileList?: FileType[]; // 初始值
  max?: number; // 图片数量
  size?: number; // 图片大小
  templateNode?: React.ReactNode;
  onChange?: (fileList: FileType[]) => void;
  customOnUpload: (file: File) => Promise<FileType[]>;
}

const UploadFile = (props: IUploadFileProps) => {
  const {
    max = 1,
    size = 10,
    accept = 'excel',
    className = '',
    children = <Button icon={<UploadOutlined />}>上传</Button>,
    hidden,
    label,
    required,
    initFileList,
    templateNode = null,
    customOnUpload,
    ...rest
  } = props;
  const [fileList, setFileList] = useState<FileType[]>(initFileList ?? []);
  const [loading, setLoading] = useState(false);

  const requiredProps = {
    required: required,
    message: `${label}不能为空`,
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
    if (flag && accept !== 'none' && !validateFileType(file, accept)) {
      flag = false;
      message.error(`需上传${acceptType[accept]}类型的文件`);
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
    <div
      className={`common-field ${className}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <ProForm.Item {...rest} label={label} rules={[requiredProps]}>
        <div style={{ display: 'flex', gap: 10 }}>
          <div>
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

            <FileView
              fileList={fileList}
              showDelete
              handleDelete={(_i) => {
                setFileList(fileList.filter((_, index) => index !== _i));
              }}
            />
          </div>

          {templateNode}
        </div>
      </ProForm.Item>
    </div>
  );
};

export default UploadFile;
