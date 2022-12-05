import "./App.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext, useMode } from "./utils/theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
