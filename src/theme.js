import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40', // Dark green color for primary
    },
    secondary: {
      main: '#ff6f00', // Orange color for secondary
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
