import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import React from 'react';
import { LayoutGroup } from 'framer-motion';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <ChakraProvider>
      <LayoutGroup>
        <Header />
        <Main />
      </LayoutGroup>
    </ChakraProvider>
  );
}

export default App;
