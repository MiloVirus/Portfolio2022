import "@fontsource/anek-latin"
import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';
import theme from './theme'




function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter/>
    </ChakraProvider>
  );
}

export default App;
