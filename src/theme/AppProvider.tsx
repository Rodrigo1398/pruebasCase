import { ThemeProvider } from '@emotion/react'
import { blackTheme } from './black-theme';
import { CssBaseline } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({children}:Props) => {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
