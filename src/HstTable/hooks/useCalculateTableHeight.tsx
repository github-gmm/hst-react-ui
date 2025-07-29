import { useDebounceFn } from 'ahooks';
import { useEffect, useRef, useState } from 'react';

type densityType = 'small' | 'middle' | 'large';

type IProps = {
  /** 额外高度 */
  otherHeight?: number;
  /** 表格密度 */
  tableDensity?: densityType;
  /** 是否有标题 */
  isTitle?: boolean;
  /** 是否有分页 */
  isPage?: boolean;
  /** 最小高度 */
  minHeight?: number;
  /** 最大高度 */
  maxHeight?: number;
};
// 表头高度，随着密度变化
const headerHeightMap = {
  small: 39,
  middle: 47,
  large: 54,
};

const useCalculateTableHeight = (props: IProps) => {
  const {
    otherHeight = 0,
    tableDensity = 'middle',
    isTitle = true,
    isPage = true,
    minHeight = 200,
    maxHeight = 800,
  } = props;

  const tableHeightObj = {
    titleHeight: isTitle ? 48 : 0, // 标题高度
    paginationHeight: isPage ? 36 : 0, // 分页高度
    paddingBottom: 2, // 底部间距
  };

  const elementRef = useRef<HTMLDivElement>(null);

  const [elHeight, setElHeight] = useState(0);
  const [tableWidth, setTableWidth] = useState(0);
  const [tableHeight, setTableHeight] = useState(0);

  const { run: computeDistance } = useDebounceFn(
    () => {
      if (elementRef.current) {
        const rect = elementRef?.current.getBoundingClientRect();
        setTableWidth(rect.width);
        const elH = window.innerHeight - rect.top - otherHeight;
        const newElh =
          elH > minHeight ? (elH < maxHeight ? elH : maxHeight) : minHeight; // 最小高度

        setElHeight(newElh);

        const tH = Object.values(tableHeightObj).reduce(
          (total, item) => total + item,
          0,
        );

        const rh = newElh - tH - headerHeightMap[tableDensity];
        setTableHeight(rh);
      }
    },
    {
      wait: 500,
    },
  );

  useEffect(() => {
    computeDistance();

    window.addEventListener('resize', computeDistance);
    return () => {
      window.removeEventListener('resize', computeDistance);
    };
  }, []);

  const recalculateHeight = () => {
    computeDistance();
  };

  return {
    elementRef,
    tableWidth,
    tableHeight,
    elHeight,
    recalculateHeight,
  };
};

export default useCalculateTableHeight;
