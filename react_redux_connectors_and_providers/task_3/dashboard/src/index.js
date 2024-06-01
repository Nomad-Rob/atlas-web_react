import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';

// Create a Redux store using Redux Toolkit with DevTools configuration
const store = configureStore({
  reducer: {
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // Enabling the Redux DevTools with specific options
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

// Root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;
