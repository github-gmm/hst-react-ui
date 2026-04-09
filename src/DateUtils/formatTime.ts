import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { isTime, isTzFormatType, isTzTime } from './compareTime';
import {
  getTimeOffset,
  getTimeOffsetByUtc,
  getTimeUtcByTzDate,
  getTimezone,
} from './getTimeInfo';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

interface OptionsParams {
  timezone?: string;
  utc?: number;
  offset?: string;
}

const dateTimeFormatType = 'YYYY-MM-DD HH:mm:ss';

// 1、普通日期转普通日期
export const formatDate = (
  date: string,
  formatType: string = dateTimeFormatType,
) => {
  if (!date || !isTime(date)) return date;

  return dayjs(date).format(formatType);
};

// 2、普通日期转tz日期（直接拼接偏移量）
export const formatDateToTz = (date: string, options: OptionsParams) => {
  const { timezone, utc, offset: defaultGmt } = options;
  if (!date || !isTime(date)) return date;

  let offset = defaultGmt || getTimeOffset(getTimezone(), date);
  if (timezone) {
    offset = String(getTimeOffset(timezone, date));
  } else if (utc !== undefined) {
    offset = String(getTimeOffsetByUtc(utc));
  }

  return `${dayjs(date).format('YYYY-MM-DDTHH:mm:ss')}${offset}`;
};

// 3、tz日期转普通日期
export const formatTzDate = (
  date: string,
  formatType: string,
  options: OptionsParams,
) => {
  const { timezone, utc } = options;
  if (!date || !isTime(date)) return date;

  if (timezone) return dayjs(date).tz(timezone).format(formatType);
  if (utc)
    return dayjs(date)
      .utcOffset(utc * 60)
      .format(formatType);

  return dayjs(date)
    .utcOffset(getTimeUtcByTzDate(date) * 60)
    .format(formatType);
};

// 4、tz日期转tz日期
export const formatTzDateToTz = (date: string) => {
  return date;
};

// 格式化日期
export const formatTime = (
  date: string,
  formatType: string,
  options: OptionsParams = {},
) => {
  if (!date || !isTime(date)) return date;

  if (isTzTime(date)) {
    if (isTzFormatType(formatType)) return formatTzDateToTz(date);

    return formatTzDate(date, formatType, options);
  } else {
    if (isTzFormatType(formatType)) return formatDateToTz(date, options);

    return formatDate(date, formatType);
  }
};
