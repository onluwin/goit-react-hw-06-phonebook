import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { ChakraProvider } from '@chakra-ui/react';

import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/goit-react-hw-06-phonebook">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
