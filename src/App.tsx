import { MantineProvider } from '@mantine/core';
import GlobalStyles from './core/components/GlobalStyles';
import AppShellLayout from './core/components/AppShell';

function App() {

  return (
    <MantineProvider>
      <GlobalStyles />
      <AppShellLayout />
    </MantineProvider>
  )
};

export default App;
