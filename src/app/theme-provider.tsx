'use client';

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme, Theme } from '../themes/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme as Theme}>
      {children}
    </StyledThemeProvider>
  );
};
