import dayjs from 'dayjs';

const tzDateType = 'YYYY-MM-DDTHH:mm:ssZ';

export const isTzDateType = (dateType: string) => {
  return dateType === tzDateType;
};

export const isTime = (date: string) => {
  return dayjs(date).isValid();
};

export const isTzTime = (date: string) => {
  const input = date?.trim();
  if (!input && isTime(date)) return false;
  const isoTzRegex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i;
  return isoTzRegex.test(input) && dayjs(input).isValid();
};
