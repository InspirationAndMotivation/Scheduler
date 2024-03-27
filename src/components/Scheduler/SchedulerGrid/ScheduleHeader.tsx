import React, { ChangeEvent, useContext, useState } from 'react';
import '../Scheduler.scss';
import { TimeModsEnum } from '../../../enums/DatesEnum';
import { AppContext } from '../../../store';
import { monthNames, timeZones } from '../../../data/MockedData';

// TODO Implement functionality of the getting current Week
function getCurrentMonthsWeek() {
  return 2;
}

function getDate() {
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();
  //const date = today.getDate();
  const week = getCurrentMonthsWeek();
  return `${month} ${year}, Week ${week}`;
}

function getTimeZone() {
  const today = new Date();
  const timeZone = -today.getTimezoneOffset() / 60;
  return `UTC ${timeZone}:00, ${
    timeZones.find((zone) => timeZone === zone.id)?.name
  }`;
}

const SchedulerHeader = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTimeZone, setCurrentTimeZone] = useState(getTimeZone());
  const { timeMod, setTimeMod } = useContext(AppContext);

  return (
    <>
      <div className="SchedulerHeader">
        <div className="CurrentDate">
          <h1>{currentDate}</h1>
          <p>{currentTimeZone}</p>
        </div>
        <div className="DropdownsMenu">
          <select
            id="timeMod"
            className="TimeModSelect"
            onChange={(e) => setTimeMod(e.target.value)}
            value={timeMod}
          >
            <option value={TimeModsEnum.twentyFourHours}>24h style</option>
            <option value={TimeModsEnum.twelveHours}>12h style</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SchedulerHeader;
