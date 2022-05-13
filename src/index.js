import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
