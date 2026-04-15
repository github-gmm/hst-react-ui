import { ActionType, ProFormInstance } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

const useTable = () => {
  const tableFormRef = useRef<ProFormInstance>();
  const tableActionsRef = useRef<ActionType>();

  const [rowKeys, setRowKeys] = useState<React.Key[]>([]);
  const [rowList, setRowList] = useState<Record<string, any>[]>([]);

  return {
    tableFormRef,
    tableActionsRef,
    rowKeys,
    rowList,
    setRowKeys,
    setRowList,
  };
};

export default useTable;
