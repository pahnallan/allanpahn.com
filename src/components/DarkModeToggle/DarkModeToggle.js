//import './DarkModeToggle.module.scss';
import "./DarkModeToggle.css"

import React, { useCallback, useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import SunSVG from '../../img/sun.svg';
import MoonSVG from '../../img/moon.svg';

// import {
//   addThemeListener,
//   getTheme,
//   removeThemeListener,
//   setPreferredTheme,
// } from '../../utils/darkmode';

const ICONS = {
  checked: <img src={MoonSVG} width="30px" height="30px" alt="dark mode" />,
  unchecked: <img src={SunSVG} width="30px" height="30px" alt="light mode" />
};

class DarkModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
    };
  }

  render(){
    return <Toggle checked={this.state.checked} icons={ICONS} onChange={() => {
      console.log(this.state.checked);
      document.documentElement.style.setProperty('--main-bg-color', this.state.checked ? "white" : "#282c34");
      document.documentElement.style.setProperty('--secondary-color', this.state.checked ? "#282c34" : "white");
      this.setState({checked: !this.state.checked});
    }} />;
  }
};

export default DarkModeToggle;