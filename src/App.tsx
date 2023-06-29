import { lazy, Suspense, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

import SnakebarsProvider from './components/snakebarsProviders';
import { ganrateTheme } from './infrastructure/theme';
import Loader from './components/Loader';
import ErrorBoundary from './components/errorBounndery';
import LightDarkSwitch from './components/lightDarkTogge';

const Home = lazy(() => import('./routes/home/home'));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <ThemeProvider theme={ganrateTheme( darkMode ? 'dark' : 'light')}>
      <Paper sx={{ borderRadius: '0px', p: 0, m: 0, minHeight: '100vh' }}>
        <SnakebarsProvider>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <div
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                }}
              >
                <LightDarkSwitch onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
              </div>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </SnakebarsProvider>
      </Paper>
    </ThemeProvider >
  );
};

export default App;
