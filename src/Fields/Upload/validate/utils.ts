export const acceptType: any = {
  image: '图片',
  excel: '表格',
  audio: '音频',
  video: '视频',
};

export const validateFileCount = (fileCount: number, max: number): boolean => {
  if (max > 0 && fileCount >= max) {
    return false;
  }

  return true;
};

export const validateFileType = (
  file: File,
  fileType: 'image' | 'excel' | 'audio' | 'video',
): boolean => {
  if (fileType === 'image') {
    const isImage = file.type.startsWith('image/');
    return !!isImage;
  } else if (fileType === 'excel') {
    const isExcel = file.name.match(/\.(xlsx|xls|csv)$/);
    return !!isExcel;
  } else if (fileType === 'audio') {
    const isAudio =
      file.type.startsWith('audio/') ||
      file.name.match(/\.(mp3|wav|m4a|aac|ogg)$/i);
    return !!isAudio;
  } else if (fileType === 'video') {
    const isVideo =
      file.type.startsWith('video/') ||
      file.name.match(/\.(mp4|avi|wmv|mov|flv|mkv)$/i);
    return !!isVideo;
  }

  return true;
};

export const validateFileSize = (file: File, size: number): boolean => {
  if (file.size / 1024 / 1024 > size) {
    return false;
  }

  return true;
};

export const validateFileRatio = async (
  file: File,
  ratio: number,
): Promise<boolean> => {
  const flag = await new Promise<boolean>((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const { width, height } = img;
      // 期望比例
      const expectedRatio = ratio; // 宽:高 = 1:1
      const actualRatio = width / height;
      // 允许一点点浮动，避免浮点误差
      const delta = Math.abs(actualRatio - expectedRatio);
      const ok = delta < 0.01;
      URL.revokeObjectURL(url);
      resolve(!!ok);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false);
    };
    img.src = url;
  });

  return flag;
};

export const validateImageSize = (
  file: File,
  width: number,
  height: number,
) => {
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const valid = img.width === width && img.height === height;
      URL.revokeObjectURL(url);
      resolve(valid);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false);
    };
    img.src = url;
  });
};
