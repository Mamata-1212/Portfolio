import RouterOutlet from './Routes';
import { MantineProvider } from '@mantine/core';

const AppContent = () => {
  return (
    <MantineProvider>
      <RouterOutlet />
    </MantineProvider>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
