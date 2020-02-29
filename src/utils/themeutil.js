import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#05668d" },
    secondary: { main: "#5B5F97" }, 
  },
  status: {
    danger: { main: "#c05746" },
  },
});

export default theme