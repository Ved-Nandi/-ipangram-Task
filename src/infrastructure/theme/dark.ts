import { createTheme } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';
import RouterLink from './routerLink';

export default createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: RouterLink,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: RouterLink,
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    mode: 'dark',
    error: {
      main: '#FF6347',
      contrastText: '#ffffff',
      dark: '#FF00',
    },
  },
});
