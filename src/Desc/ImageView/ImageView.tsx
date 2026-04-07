import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import TextareaView from '../TextareaView';
import './ImageView.less';

export interface IImageViewProps {
  fileList: {
    name: string;
    url: string;
  }[];
  showName?: boolean;
  showDelete?: boolean;
  showDownload?: boolean;
  className?: string;
  handleDelete?: (index: number) => void;
}

const ImageView = (props: IImageViewProps) => {
  const {
    fileList,
    showName = true,
    showDelete = false,
    showDownload = false,
    className = '',
    handleDelete,
  } = props;

  return (
    <div className={`upload-images ${className}`}>
      {fileList.map((item, _i) => (
        <div key={item.name} className={'upload-images-item'}>
          <Image src={item.url} height={24} width={24} />
          {showName && (
            <TextareaView hideLabel maxLines={1} value={item.name} />
          )}
          {showDownload && (
            <div className={'download-icon'}>
              <DownloadOutlined />
            </div>
          )}
          {showDelete && (
            <div className={'delete-icon'} onClick={() => handleDelete?.(_i)}>
              <DeleteOutlined />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageView;
