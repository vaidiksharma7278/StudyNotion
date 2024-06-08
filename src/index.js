import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from "./reducer"
import { configureStore } from '@reduxjs/toolkit';
import { Toaster } from 'react-hot-toast';
const store=configureStore({
    reducer:rootReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster/>
        </BrowserRouter>
        </Provider>
    </StrictMode>);
