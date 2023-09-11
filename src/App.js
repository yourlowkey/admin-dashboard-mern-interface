import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
