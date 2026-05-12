import { message } from 'antd';
import {
  acceptType,
  validateFileCount,
  validateFileSize,
  validateFileType,
} from './utils';

export const validateCommon = ({
  max,
  fileLength,
  accept,
  file,
  size,
}: any) => {
  let flag = true;

  // 验证文件数量
  if (flag && max && !validateFileCount(fileLength, max)) {
    flag = false;
    message.error(`最多只能上传${max}个文件`);
  }

  // 验证文件类型
  if (flag && !validateFileType(file, accept)) {
    flag = false;
    message.error(`需上传${acceptType[accept]}类型的文件`);
  }

  // 验证文件大小
  if (flag && size && !validateFileSize(file, size)) {
    flag = false;
    message.error(`文件大小超出限制: ${size}MB`);
  }

  return flag;
};
