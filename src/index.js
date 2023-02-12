import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { thema } from './config/mui-config';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<BrowserRouter>
<ThemeProvider theme={thema}>
<App />
</ThemeProvider>

</BrowserRouter>
</Provider>

);


