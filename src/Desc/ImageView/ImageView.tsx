import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import TextareaView from '../TextareaView';
import './ImageView.less';

export interface IImageViewProps {
  fileList: {
    name?: string;
    url?: string;
  }[];
  showName?: boolean;
  showDelete?: boolean;
  showDownload?: boolean;
  className?: string;
  bordered?: boolean;
  handleDelete?: (index: number) => void;
}

export const viewPrefix = '/crm/attachment/preview?path=';

const ImageView = (props: IImageViewProps) => {
  const {
    fileList,
    showName = true,
    bordered = true,
    showDelete = false,
    showDownload = false,
    className = '',
    handleDelete,
  } = props;

  const isUrl = (str: string) => {
    const reg = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$/i;
    return reg.test(str);
  };

  const formatUrl = (url: string) => {
    if (isUrl(url)) return url;

    return `${viewPrefix}${url}`;
  };

  return (
    <div className={`upload-images ${className} ${bordered && 'bordered'}`}>
      {fileList.map((item, _i) => (
        <div key={item.name} className={'upload-images-item'}>
          <Image src={formatUrl(`${item?.url || ''}`)} height={24} width={24} />
          {showName && (
            <TextareaView hideLabel maxLines={1} value={item.name} wrap />
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
