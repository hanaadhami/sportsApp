import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
        light: '#76ABC0',
        main: '#6184d1',
        dark: '#03384D'
    },
    secondary: {
        light: '#EFFFFB',
        main: '#bde6ff',
        dark: '#C9E8E1'
    } ,
    background: {
      default: "red"
    }
  },
  status: {
    danger: '#co5746',
  },
});

export default Theme

