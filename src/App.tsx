import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Scheduler from './components/Scheduler';
import { AppContext } from './store';
import { TimeModsEnum } from './enums/DatesEnum';

const App = () => {
  // const [theme, setTheme] = useState('');
  const [timeMod, setTimeMod] = useState<string>(
    TimeModsEnum.twelveHours as string
  );

  return (
    <AppContext.Provider value={{ timeMod, setTimeMod }}>
      <div className="App">
        <Toolbar></Toolbar>
        <Scheduler></Scheduler>
      </div>
    </AppContext.Provider>
  );
};

export default App;
