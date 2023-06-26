import React, { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import Collapse from '@mui/material/Collapse';

const SnakebarsProvider: FC<{children: React.ReactNode}> = ({ children }) => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    TransitionComponent={Collapse}
  >
    {children}
  </SnackbarProvider>
);

export default SnakebarsProvider;
