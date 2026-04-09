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
    name: string;
    url: string;
  }[];
  showView?: boolean;
  showDelete?: boolean;
  showDownload?: boolean;
  className?: string;
  borderd?: boolean;
  handleDelete?: (index: number) => void;
}

const FileView = (props: IFileViewProps) => {
  const {
    fileList,
    borderd = true,
    showView = true,
    showDelete = false,
    showDownload = false,
    className = '',
    handleDelete,
  } = props;

  return (
    <div className={`upload-files ${className} ${borderd && 'borderd'}`}>
      {fileList.map((item, _i) => (
        <div key={item.name} className={'upload-files-item'}>
          {showView && (
            <div className={'view-icon'}>
              <EyeOutlined />
            </div>
          )}

          <TextareaView hideLabel maxLines={1} value={item.name} />
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
