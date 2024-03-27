import { createContext } from 'react';
import { TimeModsEnum } from './enums/DatesEnum';

export type TimeModContext = {
  timeMod: string;
  setTimeMod: (mod: string) => void;
};

export const AppContext = createContext<TimeModContext>({
  timeMod: TimeModsEnum.twelveHours as string,
  setTimeMod: () => {},
});
