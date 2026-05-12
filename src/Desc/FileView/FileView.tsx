import {
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import React from 'react';
import TextareaView from '../TextareaView';
import './FileView.less';

export interface IFileViewProps {
  fileList: {
    name?: string;
    url?: string;
  }[];
  showView?: boolean;
  showDelete?: boolean;
  showDownload?: boolean;
  className?: string;
  bordered?: boolean;
  handleDelete?: (index: number) => void;
}

const FileView = (props: IFileViewProps) => {
  const {
    fileList,
    bordered = true,
    showView = true,
    showDelete = false,
    showDownload = false,
    className = '',
    handleDelete,
  } = props;

  const preview = (path?: string) => {
    if (path) window.open(path, '_blank');
  };

  return (
    <div className={`upload-files ${className} ${bordered && 'bordered'}`}>
      {fileList.map((item, _i) => (
        <div key={item.name} className={'upload-files-item'}>
          {showView && (
            <div
              className={'view-icon'}
              onClick={() => {
                preview(item?.url);
              }}
            >
              <EyeOutlined />
            </div>
          )}

          <TextareaView hideLabel maxLines={1} value={item.name} wrap />
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

export default FileView;
