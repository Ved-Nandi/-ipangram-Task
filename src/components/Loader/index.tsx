/* eslint-disable no-unused-vars */
import React from 'react';
import { Backdrop } from '@mui/material';
import spin from '../../infrastructure/images/spin.svg';

export const Loader = () => (
  <Backdrop
    sx={{
      color: '#fff',
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open
  >
    <img src={spin} alt="loder" height="80px" />
  </Backdrop>
);

export default Loader;
