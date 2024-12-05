import { MantineProvider } from '@mantine/core';
import './App.css';
import ViteReactPreview from './components/ViteReactPreview';

function App() {
  return (
    <MantineProvider>
      <h1>Temporal</h1>
      <ViteReactPreview />
    </MantineProvider>
  );
}

export default App;
