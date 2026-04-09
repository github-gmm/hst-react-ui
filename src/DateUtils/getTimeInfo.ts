import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

type DateUnit = 'day' | 'month' | 'year';

const tzDateType = 'YYYY-MM-DDTHH:mm:ssZ';

const getTimeByUnit = (value: number, unit: DateUnit) =>
  dayjs().add(value, unit);

export const getToday = (dateType: string = tzDateType) =>
  getTimeByUnit(0, 'day').format(dateType);

export const getTimeByDay = (day: number, dateType: string = tzDateType) =>
  getTimeByUnit(day, 'day').format(dateType);

export const getTimeByMonth = (mounth: number, dateType: string = tzDateType) =>
  getTimeByUnit(mounth, 'month').format(dateType);

export const getTimeByYear = (year: number, dateType: string = tzDateType) =>
  getTimeByUnit(year, 'year').format(dateType);

export const getTimezone = () => {
  return dayjs.tz.guess();
};

export const getTimeUtc = (timezone: string, date?: string) => {
  const target = date ? dayjs(date).tz(timezone) : dayjs().tz(timezone);
  return target.utcOffset() / 60;
};

export const getTimeUtcByTzDate = (tzDate: string) => {
  const defaultOffset = getTimeUtc(getTimezone(), getToday());

  if (tzDate.endsWith('Z')) return 0;
  const match = tzDate.match(/([+-])(\d{2}):(\d{2})$/);
  if (!match) return defaultOffset;
  const [, sign, hh, mm] = match;
  const hours = Number(hh) + Number(mm) / 60;
  return sign === '+' ? hours : -hours;
};

export const getTimeOffset = (timezone: string, date?: string) => {
  const target = date ? dayjs(date).tz(timezone) : dayjs().tz(timezone);
  return target.format('Z');
};

export const getTimeOffsetByUtc = (offset: number | string) => {
  const value = typeof offset === 'string' ? Number(offset) : offset;
  const defaultOffsetStr = getTimeOffset(getTimezone(), getToday());

  if (!Number.isFinite(value)) {
    return defaultOffsetStr;
  }
  if (value < -12 || value > 14) {
    return defaultOffsetStr;
  }
  const totalMinutes = Math.round(value * 60);

  if (totalMinutes % 15 !== 0) {
    return defaultOffsetStr;
  }

  const sign = totalMinutes >= 0 ? '+' : '-';
  const absMinutes = Math.abs(totalMinutes);
  const hours = Math.floor(absMinutes / 60);
  const minutes = absMinutes % 60;
  return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0',
  )}`;
};
