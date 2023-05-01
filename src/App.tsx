import { MantineProvider } from '@mantine/core';
import GlobalStyles from './core/components/GlobalStyles';
import AppShellLayout from './core/components/AppShell';

import "./App.css"

function App() {

  return (
    <MantineProvider
      theme={{
        breakpoints: {
          xs: '30em',
          sm: '36em',
          md: '48em',
          lg: '62em',
          xl: '75em',
        }
      }}>
      <GlobalStyles />
      <AppShellLayout />
    </MantineProvider>
  )
};

export default App;
