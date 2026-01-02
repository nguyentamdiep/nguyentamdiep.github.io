
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './MarketingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Blog from './pages/Blog';
import AboutMe from './pages/AboutMe';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AppTheme>
          <CssBaseline enableColorScheme />
          <AppAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </AppTheme>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);