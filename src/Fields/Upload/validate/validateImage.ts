import { message } from 'antd';
import {
  validateFileCount,
  validateFileRatio,
  validateFileSize,
  validateFileType,
  validateImageSize,
} from './utils';

const acceptType: any = {
  image: '图片',
};

export const validateImage = async ({
  max,
  accept,
  ratio,
  file,
  size,
  imgSize,
  fileList,
}: any) => {
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

  return flag;
};
