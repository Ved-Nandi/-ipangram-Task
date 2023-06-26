/* eslint-disable arrow-body-style */
import React, { FC } from 'react';
import triangleExclamation from '../../infrastructure/images/triangle-exclamation-solid.svg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface SomethingWentWrongProps {
  onGoBack: () => void;
}

export const SomethingWentWrong: FC<SomethingWentWrongProps> = ({ onGoBack }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
    onGoBack();
  };
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        color: 'gray',
        marginTop: '40px',
      }}
    >
      <img src={triangleExclamation} height="240px" alt="error img" />
      <h1 style={{ marginBottom: '0px' }}>Something went wrong! </h1>
      <h3 style={{ marginTop: '3px' }}>Please connect with Outmarch Team</h3>
      <Button variant="contained" onClick={handleGoBack}>
        go back
      </Button>
    </div>
  );
};

export default SomethingWentWrong;
