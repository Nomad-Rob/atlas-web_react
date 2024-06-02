import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducer';
import courseReducer from './reducers/courseReducer'; // Ensure you have this reducer created
import notificationReducer from './reducers/notificationReducer'; // Ensure you have this reducer created

// Combining multiple reducers into a single root reducer
const rootReducer = combineReducers({
  ui: uiReducer,
  courses: courseReducer,
  notifications: notificationReducer
});

// Create a Redux store using Redux Toolkit with the root reducer and DevTools configuration
const store = configureStore({
  reducer: rootReducer,
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
