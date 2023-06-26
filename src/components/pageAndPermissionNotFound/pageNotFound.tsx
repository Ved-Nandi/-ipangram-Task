/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { styled } from '@mui/material';

const H1 = styled('h1')`
  color: grey;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

export const PageNotFound = () => (
  <div style={{
    display: 'grid',
    placeItems: 'center',
    minHeight: '70vh',
  }}
  >
    <div>
      <H1 style={{ fontSize: '178px' }}>
        ☹
      </H1>
      <H1 style={{ marginTop: '-20px' }}>
        404
      </H1>
      <H1 as="h2" style={{ color: 'lightgray' }}>
        page  not found
      </H1>
      <H1 as="h5" style={{ color: 'lightgray' }}>
        The page you are loking for doesn't exist or an other error occured.
      </H1>
    </div>
  </div>
);
