import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Dashboard from "./components/Dashboard";
import { TemperatureProvider } from "./context/TemperatureContext";

// Custom Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TemperatureProvider>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Dashboard />
        </Container>
      </TemperatureProvider>
    </ThemeProvider>
  );
};

export default App;
