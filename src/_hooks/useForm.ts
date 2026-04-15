import { ProFormInstance } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

const useForm = () => {
  const fieldFormRef = useRef<ProFormInstance>();
  const [dependencyValues, setDependencyValues] = useState<
    Record<string, any> | undefined
  >();
  const [initValues, setInitValues] = useState<
    Record<string, any> | undefined
  >();

  const getValues = () => {
    return fieldFormRef.current?.getFieldsValue() || {};
  };

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
    initValues,
    dependencyValues,
    setDependencyValues,
    setInitValues,
    getValues,
    validateFields,
  };
};

export default useForm;
