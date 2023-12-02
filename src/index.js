import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'

const colors = {
  brandPink: '#efb9d0',
  brandBrown: '#66534a',
  brandCream: '#f9f1ea',
  brandGray: '#9992a2',
  brandLightBrown: '#b0a08d',
};

const theme = extendTheme({
  colors: {
    brand: colors,
  },
});

ReactDOM.render(
  <React.StrictMode>
      <App />
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();