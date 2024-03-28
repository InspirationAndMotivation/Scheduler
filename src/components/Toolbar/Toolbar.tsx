import React, { useEffect, useState } from 'react';
import './Toolbar.scss';
import logo from '../../media/calendar2.png';

const Toolbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(
    JSON.parse(localStorage.getItem('theme') as string)
  );

  useEffect(() => {
    document.body.setAttribute('theme', isLightTheme ? 'light' : 'dark');
    localStorage.setItem('theme', JSON.stringify(isLightTheme ? true : false));
  }, [isLightTheme]);

  return (
    <>
      <div className="SchedulerToolbar">
        <div className="LogoSide">
          <img src={logo} alt="Logo" className="ToolbarLogo" />
          <h1 className="AppName">Scheduler</h1>
        </div>
        <div className="ButtonsSide">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={isLightTheme}
            readOnly
          />
          <label
            htmlFor="theme-toggle"
            className="ThemeToggle"
            onClick={() => setIsLightTheme(!isLightTheme)}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
