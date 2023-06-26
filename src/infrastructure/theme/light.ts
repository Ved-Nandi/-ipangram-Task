import { createTheme } from '@mui/material/styles';
import type { LinkProps } from '@mui/material/Link';
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
    mode: 'light',
    error: {
      main: '#FF0000',
      contrastText: '#ffffff',
    },
  },
});
