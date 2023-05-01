import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);