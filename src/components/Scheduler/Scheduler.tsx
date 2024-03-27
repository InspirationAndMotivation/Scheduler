import React, { ChangeEvent, useState } from 'react';
import './Scheduler.scss';
import SchedulerGrid from './SchedulerGrid/SchedulerGrid';
import SchedulerHeader from './SchedulerGrid/ScheduleHeader';

const Scheduler = () => {
  return (
    <>
      <div className="SchedulerCalendar">
        <SchedulerHeader></SchedulerHeader>
        <SchedulerGrid></SchedulerGrid>
      </div>
    </>
  );
};

export default Scheduler;
