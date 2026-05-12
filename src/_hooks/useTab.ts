import { useState } from 'react';

const useTab = (key?: string | number) => {
  const [tabKey, setTabKey] = useState<string | number>(key || '');

  const handleChangeTabKey = (key: string | number) => {
    setTabKey(key);
  };

  return { tabKey, handleChangeTabKey };
};

export default useTab;
