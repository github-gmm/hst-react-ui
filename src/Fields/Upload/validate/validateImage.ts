import { message } from 'antd';
import { validateFileRatio, validateImageSize } from './utils';

export const validateImage = async ({ file, accept, acceptInfo }: any) => {
  const { ratio, imgSize } = acceptInfo;
  let flag = true;

  // 验证图片宽高或者比率
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

  return flag;
};
