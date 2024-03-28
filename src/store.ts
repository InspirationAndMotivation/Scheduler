import { createContext } from 'react';
import { getWeekByDay } from './utils/DateOperations';

export type TimeModContext = {
  timeMod: string;
  setTimeMod: (mod: string) => void;
  today: Date;
  currentWeek: Array<Date>;
  setCurrentWeek: (newWeek: Array<Date>) => void;
};

export const AppContext = createContext<TimeModContext>({
  timeMod: JSON.parse(localStorage.getItem('timeFormat') as string),
  setTimeMod: () => {},
  today: new Date(),
  currentWeek: getWeekByDay(new Date()),
  setCurrentWeek: () => {},
});
