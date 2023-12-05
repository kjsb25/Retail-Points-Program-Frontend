import "./App.css";
import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import HeaderComponent from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="App">
        <HeaderComponent />
        <MainPage />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
