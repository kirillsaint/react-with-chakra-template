import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Download from './pages/Download';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
