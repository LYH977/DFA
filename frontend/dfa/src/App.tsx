import React from 'react';
import Container from './components/Container';
import { Navbar } from './components/Navbar';
import { ContextProvider } from './contexts';

function App() {
  return (
    <ContextProvider>
      <Navbar/>
      <Container/>
    </ContextProvider>
  );
}

export default App;
