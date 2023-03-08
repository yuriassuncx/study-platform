import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './contexts/ContextProvider';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { App } from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AppProvider>
  </React.StrictMode>,
)
