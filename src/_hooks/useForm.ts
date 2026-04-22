import { ProFormInstance } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

export interface FileType {
  name: string;
  url: string;
}

const useForm = () => {
  // 图片文件
  const [fileList, setFileList] = useState<FileType>();
  // form绑定
  const fieldFormRef = useRef<ProFormInstance>();

  const getValues = () => {
    return fieldFormRef.current?.getFieldsValue() || {};
  };
  // 提前校验
  const validateFields = () => {
    return new Promise((resolve, reject) => {
      fieldFormRef.current
        ?.validateFields()
        .then(() => {
          resolve(getValues());
        })
        .catch(reject);
    });
  };

  return {
    fieldFormRef,
    fileList,
    getValues,
    validateFields,
    setFileList,
  };
};

export default useForm;
