import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Scheduler from './components/Scheduler';

const App = () => {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <Scheduler></Scheduler>
    </div>
  );
};

export default App;
