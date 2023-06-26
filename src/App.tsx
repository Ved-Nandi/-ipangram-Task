import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

import SnakebarsProvider from './components/snakebarsProviders';
import { ganrateTheme } from './infrastructure/theme';
import Loader from './components/Loader';
import ErrorBoundary from './components/errorBounndery';

const Home = lazy(() => import('./routes/home/home'));

const App = () => {
  return (
    <ThemeProvider theme={ganrateTheme('dark')}>
      <Paper sx={{ borderRadius: '0px', p: 0, m: 0, minHeight: '100vh' }}>
        <SnakebarsProvider>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
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
