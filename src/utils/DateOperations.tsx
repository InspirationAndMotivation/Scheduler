import { getWeekOfMonth, nextDay, startOfWeek, Day } from 'date-fns';
import { monthNames, timeZones } from '../data/MockedData';

export function getDate(date: Date) {
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const week = getWeekOfMonth(date);
  return `${month} ${year}, Week ${week}`;
}

export function getTimeZone(date: Date) {
  const timeZone = -date.getTimezoneOffset() / 60;
  return `UTC ${timeZone > 0 ? '+' + timeZone : timeZone}:00, ${
    timeZones.find((zone) => timeZone === zone.id)?.name
  }`;
}

export function getDisplayTime(is12H: boolean) {
  return new Date().toLocaleTimeString('en-US', {
    hour12: is12H,
  });
}

export function compareDates(firstDate: Date, secondDate: Date) {
  return firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
    ? true
    : false;
}

// TODO: Improve this function
export function getWeekByDay(day: Date) {
  let dayIndex = 1;
  const week = Array<Date>();
  const monday = startOfWeek(day);

  while (dayIndex < 8) {
    week.push(nextDay(monday, dayIndex as Day));
    dayIndex++;
  }
  return week;
}
