import { useState } from 'react';

const useTab = (key?: string) => {
  const [tabKey, setTabKey] = useState<string>(key || '');

  const handleChangeTabKey = (key: string) => {
    setTabKey(key);
  };

  return { tabKey, handleChangeTabKey };
};

export default useTab;
