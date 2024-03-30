import React, { useContext, useEffect, useState } from 'react';
import '../Scheduler.scss';
import { TimeModsEnum } from '../../../enums/DatesEnum';
import { AppContext } from '../../../store';
import {
  getDate,
  getDisplayTime,
  getTimeZone,
  getWeekByDay,
} from '../../../utils/DateOperations';
import { add, sub } from 'date-fns';

const SchedulerHeader = () => {
  const { timeMod, setTimeMod, today, setCurrentWeek } = useContext(AppContext);
  const [pickedDay, setPickedDay] = useState(today);
  const [currentDate, setCurrentDate] = useState(getDate(today));
  const [currentTime, setCurrentTime] = useState(
    getDisplayTime(timeMod === TimeModsEnum.twelveHours)
  );
  const [currentTimeZone, setCurrentTimeZone] = useState(getTimeZone(today));

  useEffect(() => {
    localStorage.setItem('timeFormat', JSON.stringify(timeMod));

    const intervalId = setInterval(() => {
      setCurrentTime(
        timeMod === TimeModsEnum.twelveHours
          ? getDisplayTime(true)
          : getDisplayTime(false)
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeMod]);

  useEffect(() => {
    setCurrentTimeZone(getTimeZone(today));
  }, [today]);

  const handleTodayButton = () => {
    setPickedDay(today);
    setCurrentDate(getDate(today));
    setCurrentWeek(getWeekByDay(today));
  };

  const handlePrevWeek = () => {
    const prevWeekDay = sub(pickedDay, { weeks: 1 });
    setPickedDay(prevWeekDay);
    setCurrentDate(getDate(prevWeekDay));
    setCurrentWeek(getWeekByDay(prevWeekDay));
  };

  const handleNextWeek = () => {
    const nextWeekDay = add(pickedDay, { weeks: 1 });
    setPickedDay(nextWeekDay);
    setCurrentDate(getDate(nextWeekDay));
    setCurrentWeek(getWeekByDay(nextWeekDay));
  };

  const handleAddEvent = () => {
    //TODO: Adding event functionality (rendering on the calendar + creation of the array with events)
    /* Check if Row Number === Time of the event (1 AM -> 1st row, so If its 8AM-10AM, you need 8-9th rows)
     * Then Check if Your date === Date on the top (column header), if true -> change background color + add text in the first cell
     * (the highest one);
     * Save events into the massive -> render its when needed week is opened
     * Dont forget to remove borders (top and bottom)
     */
  };

  return (
    <>
      <div className="SchedulerHeader">
        <div className="CurrentDate">
          <h1>{currentDate}</h1>
          <p className="CurrentTime">{currentTime}</p>
          <p>{currentTimeZone}</p>
        </div>
        <div className="ButtonsMenu">
          <button className="HeaderButton" onClick={handleAddEvent}>
            Add event
          </button>
          <button
            className="HeaderButton"
            onClick={handlePrevWeek}
          >{`<`}</button>
          <button className="HeaderButton" onClick={handleTodayButton}>
            Today
          </button>
          <button
            className="HeaderButton"
            onClick={handleNextWeek}
          >{`>`}</button>
          <select
            id="timeMod"
            className="TimeModSelect"
            onChange={(e) => setTimeMod(e.target.value)}
            value={timeMod}
          >
            <option value={TimeModsEnum.twentyFourHours}>24h format</option>
            <option value={TimeModsEnum.twelveHours}>12h format</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SchedulerHeader;
