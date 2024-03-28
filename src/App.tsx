import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Scheduler from './components/Scheduler';
import { AppContext } from './store';
import { getWeekByDay } from './utils/DateOperations';

const App = () => {
  const [timeMod, setTimeMod] = useState<string>(
    JSON.parse(localStorage.getItem('timeFormat') as string)
  );
  const [today] = useState<Date>(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeekByDay(today));

  return (
    <AppContext.Provider
      value={{
        timeMod,
        setTimeMod,
        today,
        currentWeek,
        setCurrentWeek,
      }}
    >
      <div className="App">
        <Toolbar></Toolbar>
        <Scheduler></Scheduler>
      </div>
    </AppContext.Provider>
  );
};

export default App;
