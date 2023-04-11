import { MantineProvider } from '@mantine/core';
import GlobalStyles from './core/components/GlobalStyles';
import AppShellLayout from './core/components/AppShell';
import MainApp from './core/components/MainApp';

function App() {

  return (
    <MantineProvider>
      <GlobalStyles />
      {/* <MainApp /> */}
      <AppShellLayout />
    </MantineProvider>
  )
};

export default App;
