
const { createTheme } = require("@mui/material");


const themeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3d4469',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#ececec',
          paper: '#ffffff',
        },
      },
});