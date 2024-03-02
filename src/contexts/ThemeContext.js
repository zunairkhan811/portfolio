import React, { createContext, useState } from 'react';

import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme),
    [
      drawerOpen,
      setDrawerOpen,
    ] = useState(false),

    setHandleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    },

    value = {
      theme,
      drawerOpen,
      setHandleDrawer,
    };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
