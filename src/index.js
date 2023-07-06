import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyles } from 'styles';
import { TodoProvider } from 'context/context';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
