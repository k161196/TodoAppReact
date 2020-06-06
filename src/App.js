import React, { useState } from "react";
import { grey } from "@material-ui/core/colors";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import TaskApp from "./component/TaskApp";
function App() {
  // We keep the theme in app state

  const [theme, setTheme] = useState({
    palette: {
      primary: grey,
      secondary: grey,
      type: "light",
    },
  });
  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        ...theme.palette,
        type: newPaletteType,
      },
    });
  };
  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className='App'>
        <TaskApp onToggleDark={toggleDarkTheme} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
