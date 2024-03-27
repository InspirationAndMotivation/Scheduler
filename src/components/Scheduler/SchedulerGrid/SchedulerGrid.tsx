import React, { useContext, useEffect, useState } from 'react';
import { TimeModsEnum } from '../../../enums/DatesEnum';
import { AppContext } from '../../../store';
import { timeRanges, weekDays } from '../../../data/MockedData';

const SchedulerGrid = () => {
  const { timeMod, setTimeMod } = useContext(AppContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [isResolutionSmall, setIsResolutionSmall] = useState(width < 1600);

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

  return (
    <>
      <table className="SchedulerGrid">
        <thead>
          <tr className="TableHeader">
            {weekDays.map((day) => (
              <th className="ColumnName MainColumn" key={day.id}>
                {isResolutionSmall ? day.shortName : day.name}
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
