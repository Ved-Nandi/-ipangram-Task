/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { styled } from '@mui/material';

const H1 = styled('h1')`
  color: #3B3B3B;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

export const PermissionDenial = () => (
  <div>
    <div style={{
      display: 'grid',
      placeItems: 'center',
      minHeight: '70vh',
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <div style={{
          display: 'grid',
          placeItems: 'center',
          height: '125px',
          width: '125px',
          backgroundColor: '#D22B2B',
          borderRadius: '50%',
          fontSize: '100px',
          color: 'white',
          transform: 'rotate(45deg)',
          fontWeight: '900',
          lineHeight: '0px',
        }}
        >
          +
        </div>
        <H1 style={{ marginTop: '26px' }}>
          Access Denied
        </H1>
        <H1 as="h3" style={{ color: 'grey', marginTop: '15px' }}>
          You don't have permission to view this page
        </H1>
        <H1 as="h3" style={{ color: 'grey' }}>
          Please contact your system administrator.
        </H1>
      </div>
    </div>
  </div>
);
