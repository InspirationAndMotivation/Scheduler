import React, { useContext, useEffect, useState } from 'react';
import { TimeModsEnum } from '../../../enums/DatesEnum';
import { AppContext } from '../../../store';
import { timeRanges, weekDays } from '../../../data/MockedData';
import { compareDates, getWeekByDay } from '../../../utils/DateOperations';

const SchedulerGrid = () => {
  const { timeMod, today, currentWeek, setCurrentWeek } =
    useContext(AppContext);

  const [width, setWidth] = useState(window.innerWidth);
  const [isResolutionSmall, setIsResolutionSmall] = useState(width < 1600);

  useEffect(() => {
    setCurrentWeek(getWeekByDay(today));
  }, [setCurrentWeek, today]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  useEffect(() => {
    setIsResolutionSmall(width < 1600);
  }, [width]);

  const isDateToday = (date: Date) => compareDates(date, today);

  return (
    <>
      <table className="SchedulerGrid">
        <thead>
          <tr className="TableHeader">
            {weekDays.map((day) => (
              <th className="ColumnName MainColumn" key={day.id}>
                {isResolutionSmall ? day.shortName : day.name}
                {day.id > 0 && currentWeek && (
                  <p
                    className={`WeekDates ${
                      isDateToday(currentWeek[day.id - 1]) ? 'TodaysDate' : ''
                    }`}
                  >
                    {currentWeek[day.id - 1].getDate()}
                  </p>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeRanges.map((time) => {
            return (
              <tr className="RowName" key={time.id}>
                <td className="GridCell MainColumn">
                  {(timeMod as string) === TimeModsEnum.twelveHours
                    ? time.twelveMod
                    : time.twentyfourMod}
                </td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
                <td className="GridCell"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SchedulerGrid;
